const valorInput = document.getElementById('carta-texto');
const tagParagrafo = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const tagParagrafo2 = document.getElementById('carta-contador');
const span = document.getElementsByTagName('span');
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];
function numeroDeCartas() {
  let controlador = 0;
  for (let i = 0; i < span.length; i += 1) {
    controlador += 1;
  }
  tagParagrafo2.innerText = controlador;
}
function gerarEstilo(e) {
  const alvo = e;
  alvo.target.className = '';
  alvo.target.classList.add(grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)]);
  alvo.target.classList.add(grupoTamanho[Math.floor(Math.random() * grupoEstilo.length)]);
  alvo.target.classList.add(grupoRotacao[Math.floor(Math.random() * grupoEstilo.length)]);
  alvo.target.classList.add(grupoInclinacao[Math.floor(Math.random() * grupoEstilo.length)]);
}
function criarCarta() {
  tagParagrafo.innerHTML = '';
  const texto = valorInput.value.split(' ');
  if (valorInput.value.length === 0 || !valorInput.value.trim()) {
    tagParagrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < texto.length; i += 1) {
      const creatElement = document.createElement('span');
      creatElement.innerText = texto[i];
      creatElement.classList.add(grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)]);
      creatElement.classList.add(grupoTamanho[[Math.floor(Math.random() * grupoTamanho.length)]]);
      creatElement.classList.add(grupoRotacao[[Math.floor(Math.random() * grupoRotacao.length)]]);
      creatElement.classList.add(grupoInclinacao[[Math.floor(Math.random() * grupoInclinacao.length)]]);
      creatElement.addEventListener('click', gerarEstilo);
      tagParagrafo.appendChild(creatElement);
    }
  }
}
btnCriarCarta.addEventListener('click', criarCarta);
btnCriarCarta.addEventListener('click', numeroDeCartas);
