const valorInput = document.getElementById('carta-texto');
const tagParagrafo = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
function criarCarta() {
  tagParagrafo.innerHTML = '';
  const texto = valorInput.value.split(' ');
  if (valorInput.value.length === 0 || !valorInput.value.trim()) {
    tagParagrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  for (let i = 0; i < texto.length; i += 1) {
    const creatElement = document.createElement('span');
    creatElement.innerText = texto[i];
    tagParagrafo.appendChild(creatElement);
  }
}
btnCriarCarta.addEventListener('click', criarCarta);
