const welcomeMessage = document.getElementById('welcomeMessage');
const visitCountDiv = document.getElementById('visitCount');
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('name');

function saveName(event) {
    event.preventDefault();
    const userName = nameInput.value;
    if (userName.trim()) {
        localStorage.setItem('userName', userName);
        showWelcomeMessage(userName);
        nameInput.value = ''; // Limpa o campo de entrada
    }
}

function showWelcomeMessage(name) {
    welcomeMessage.textContent = `Bem-vindo, ${name}!`;
}

function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount');
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
    localStorage.setItem('visitCount', visitCount);
    visitCountDiv.textContent = `Você visitou esta página ${visitCount} vezes.`;
}

const storedName = localStorage.getItem('userName');
if (storedName) {
    showWelcomeMessage(storedName);
}

updateVisitCount();

nameForm.addEventListener('submit', saveName);