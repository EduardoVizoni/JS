fetch("https://api.exemplo.com/novo-dado", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nome: "João",
    idade: 30,
  }),
})
  .then((response) => {
    if (!response.ok) throw new Error("Erro ao enviar dados");
    return response.json();
  })
  .then((data) => console.log("Dados enviados com sucesso:", data))
  .catch((error) => console.error("Erro:", error));