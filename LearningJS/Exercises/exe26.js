/* Crie um jogo de adivinhação de números em JavaScript com as seguintes características:
O jogo deve sortear um número aleatório entre 1 e 100.
Solicite o nome do jogador no início do jogo.
Use prompt para pedir os palpites do jogador e alert para fornecer feedback.
O jogo deve informar se o palpite está alto, baixo ou correto.
Conte o número de tentativas que o jogador precisa para acertar.
Ao acertar, mostre uma mensagem de parabéns com o número de tentativas.
Mantenha um ranking dos 10 melhores jogadores (menos tentativas).
Exiba o ranking atualizado após cada jogo. */


let ranking = [];

function startGame() {
    const playerName = prompt("Qual é o seu nome?");
    if (!playerName) {
        alert("Nome não fornecido. O jogo será encerrado.");
        return;
    }

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function guessNumber() {
        const input = prompt("Adivinhe um número entre 1 e 100:");
        const guess = parseInt(input, 10);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Por favor, insira um número válido entre 1 e 100.");
            return guessNumber();
        }

        attempts++;

        if (guess < secretNumber) {
            alert("O seu palpite está baixo.");
            return guessNumber();
        } else if (guess > secretNumber) {
            alert("O seu palpite está alto.");
            return guessNumber();
        } else {
            alert(`Parabéns, ${playerName}! Você acertou o número em ${attempts} tentativas.`);
            updateRanking(playerName, attempts);
            showRanking();
        }
    }

    guessNumber();
}

function updateRanking(playerName, attempts) {
    ranking.push({ name: playerName, attempts: attempts });
    ranking.sort((a, b) => a.attempts - b.attempts);
    ranking = ranking.slice(0, 10);
}

function showRanking() {
    let rankingMessage = "Ranking dos Melhores Jogadores:\n";
    ranking.forEach((entry, index) => {
        rankingMessage += `${index + 1}. ${entry.name} - ${entry.attempts} tentativas\n`;
    });
    alert(rankingMessage);
}

startGame();


