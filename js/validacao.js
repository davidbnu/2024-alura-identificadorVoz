const elementoMensagem = document.querySelector('.mensagem');

function verificarChuteValido(chute) {
    const numero = +chute;

    if (numeroInvalido(numero)){
        mensagemRetorno('Valor inválido da entrada');
        return;
    }

    if (numeroMaioMenor(numero)) {
        mensagemRetorno(`Valor é inválido pois é menor que ${menorValor} e maior que ${maiorValor} `);
        return;
    }

    if (verificarAcerto(numero)) {
       document.body.innerHTML = 
        `<h1>Você acertou!</h1>
        <h3>O número secreto é ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        return;
    } else if (numero > numeroSecreto) {
        mensagemRetorno('O número sorteado é menor ');
        identificadorNumeroMenor();

    } else {
        mensagemRetorno('O número sorteado é maior ');
        identificadorNumeroMaior();
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaioMenor(numero) {
    return (numero < menorValor) || (numero > maiorValor);
}

function verificarAcerto(numero) {
    return numero === numeroSecreto;
}

function identificadorNumeroMenor() {
    const indicador = document.createElement('i');
    indicador.classList.add('fa-solid','fa-down-long');
    const elementoMensagem = document.querySelector('.mensagem-retorno');
    elementoMensagem.append(indicador);       
}

function identificadorNumeroMaior() {
    const indicador = document.createElement('i');
    indicador.classList.add('fa-solid','fa-up-long');
    const elementoMensagem = document.querySelector('.mensagem-retorno');
    elementoMensagem.append(indicador);       
}

function mensagemRetorno(mensagem) {
    const elementoDiv = document.querySelector('.mensagem-retorno');
    elementoDiv.textContent = mensagem;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})