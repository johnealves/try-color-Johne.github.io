const bolas = document.getElementsByClassName("ball");
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer')
const botaoReiniciar = document.getElementById('reset-game');
const tomVermelho = document.getElementById('corRed')
const cores = [];
const pontos = document.getElementById('score')
let numPontos = 0

function corRed() {
    const red = Math.floor(Math.random() * 256)
    return red
}
function corGreen() {
    const green = Math.floor(Math.random() * 256)
    return green
}
function corBlue() {
    const blue = Math.floor(Math.random() * 256)
    return blue
}

/*function numeroAleatorio() {
    const numero = Math.floor(Math.random() * 256);
    return numero;
};*/

function corAleatoria() {
    const rgb = `rgb(${corRed()}, ${corGreen()}, ${corBlue()})`;
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
