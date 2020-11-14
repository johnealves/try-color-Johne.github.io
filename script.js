const bolas = document.getElementsByClassName("ball");
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer')
const botaoReiniciar = document.getElementById('reset-game');
const cores = [];

function numeroAleatorio() {
    const numero = Math.floor(Math.random() * 256);
    return numero;
};

function corAleatoria() {
    const rgb = `rgb(${numeroAleatorio()}, ${numeroAleatorio()}, ${numeroAleatorio()})`;
    return rgb;
}
function cliqueNaBola(event) {
    const corSelecionada = event.target.style.backgroundColor;
    if (corSelecionada === textoCor.textContent) {
        textoResposta.textContent = 'Acertou!'
    } else {
        textoResposta.textContent = 'Errou! tente novamente.'
    }
}

for (let bola = 0; bola < bolas.length; bola++) {
    const cor = corAleatoria()
    bolas[bola].style.backgroundColor = cor;
    cores[bola] = cor;
    bolas[bola].addEventListener('click', cliqueNaBola);
}

function adicionaCorAleatoria() {
    textoCor.textContent = cores[Math.floor(Math.random() * 6)]
}

adicionaCorAleatoria()

function reiniciaJogo() {
    window.location.reload();
}

botaoReiniciar.addEventListener('click', reiniciaJogo);
