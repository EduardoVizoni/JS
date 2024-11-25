const mensagem = document.getElementById('mensagem');
const imagem = document.getElementById('imagem');
const novoParagrafo = document.createElement('p');
const lista = document.getElementById('lista');
const item = document.getElementById('item3');
const titulo = document.querySelector('h1');
const img = document.querySelector('img');
const link = document.getElementById('linkExterno');
const imagens = document.querySelectorAll('img');


mensagem.innerHTML = '<strong>Olá, mundo!</strong>';
imagem.setAttribute('src', 'javascriptlogo.png');
imagem.setAttribute('alt', 'Nova Descrição');

mensagem.classList.add('ativo');
mensagem.classList.remove('inativo');
mensagem.classList.toggle('ativo');

novoParagrafo.textContent = 'Parágrafo criado via JavaScript';
document.body.appendChild(novoParagrafo);

lista.removeChild(item);

titulo.style.color = 'blue';
titulo.style.fontSize = '3rem';

img.addEventListener('click', mostrarMensagem);

function mostrarMensagem() {
    console.log('Imagem clicada!');
}

function bloquearLink(event) {
  event.preventDefault();
  console.log('Link bloqueado');
}

link.addEventListener('click', bloquearLink);

function mostrarThis() {
    console.log(this); // Exibe o elemento img
}
  
img.addEventListener('click', mostrarThis);

function mostrarTipo(event) {
    console.log(`Tipo de evento: ${event.type}`);
}
  
img.addEventListener('click', mostrarTipo);
img.addEventListener('mouseenter', mostrarTipo);
window.addEventListener('scroll', mostrarTipo);
window.addEventListener('resize', mostrarTipo);

function atalhosTeclado(event) {
    if (event.key === 'a') {
      document.body.classList.toggle('azul');
    } else if (event.key === 'v') {
      document.body.classList.toggle('vermelho');
    }
}
  
window.addEventListener('keydown', atalhosTeclado);

function exibirSrc(event) {
    console.log(event.currentTarget.getAttribute('src'));
}
  
imagens.forEach(img => {
    img.addEventListener('click', exibirSrc);
});