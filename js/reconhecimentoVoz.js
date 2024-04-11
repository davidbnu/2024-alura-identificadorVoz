const elementoChute = document.querySelector('.box');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    const chute = e.results[0][0].transcript;
    exibeChuteTela(chute);
    verificarChuteValido(chute);
}

function exibeChuteTela(chute) {
    elementoChute.textContent = chute;
}

recognition.addEventListener('end',() => recognition.start());
