const apiKey = 'a4ad5737a9f243ec9a6193041242511';
const buscarBtn = document.getElementById('buscar');
const resultadoDiv = document.getElementById('resultado');
const spinner = document.getElementById('spinner');

buscarBtn.addEventListener('click', () => {
  const cidade = document.getElementById('cidade').value.trim();
  resultadoDiv.innerHTML = '';
  if (!cidade) {
    resultadoDiv.innerHTML = `<p class="text-red-500 font-semibold">Por favor, digite uma cidade válida.</p>`;
    return;
  }

  spinner.classList.remove('hidden');
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados. Verifique o nome da cidade.');
      }
      return response.json();
    })
    .then(data => {
      const { temp_c, feelslike_c, humidity, wind_kph, condition } = data.current;
      const iconUrl = condition.icon; // URL do ícone fornecida pela API
      resultadoDiv.innerHTML = `
        <div class="bg-gray-100 p-6 rounded-lg shadow-md">
          <div class="text-center">
            <img src="https:${iconUrl}" alt="${condition.text}" class="w-20 h-20 mx-auto">
            <h2 class="text-xl font-bold mt-2">${data.location.name}, ${data.location.region}</h2>
            <p class="text-gray-500 italic">${condition.text}</p>
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
              <i class="fas fa-temperature-low text-blue-600 text-2xl"></i>
              <p class="mt-2 font-medium">Temperatura</p>
              <p class="text-lg font-bold">${temp_c}°C</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
              <i class="fas fa-thermometer-half text-yellow-500 text-2xl"></i>
              <p class="mt-2 font-medium">Sensação</p>
              <p class="text-lg font-bold">${feelslike_c}°C</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
              <i class="fas fa-tint text-blue-400 text-2xl"></i>
              <p class="mt-2 font-medium">Umidade</p>
              <p class="text-lg font-bold">${humidity}%</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
              <i class="fas fa-wind text-gray-500 text-2xl"></i>
              <p class="mt-2 font-medium">Vento</p>
              <p class="text-lg font-bold">${wind_kph} km/h</p>
            </div>
          </div>
        </div>
      `;
    })
    .catch(error => {
      resultadoDiv.innerHTML = `<p class="text-red-500 font-semibold">${error.message}</p>`;
    })
    .finally(() => {
      spinner.classList.add('hidden');
    });
});