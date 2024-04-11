const menorValor = 1;
const maiorValor = 500;
const numeroSecreto = geraNumeroAleatorio();
console.log(numeroSecreto);

const valorSorteado = document.querySelector('.box');
const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

function geraNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1);
}


elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;



