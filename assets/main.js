const startingModal = document.querySelector('.starting-modal');
const cancelBtn = document.querySelector('.cancel');





window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-UK';

let p = document.createElement('p');
const words = document.querySelector('.words');
const speakMic = document.querySelector('.speak-mic');
console.log(p.textContent);
words.appendChild(p);

setInterval(() => {
  if (p.textContent != '') {
    speakMic.classList.add('remove');
  
  }
}, 10);
recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  const fuckSensor = transcript.replace(/fuck|sex|pussy|shit/gi, '🤐');
  p.textContent = fuckSensor;

  if (e.results[0].isFinal) {
    p = document.createElement('p');

    words.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();


function startingMessage() {
  startingModal.classList.add('show');
  words.classList.add('remove');
}
startingMessage();

function cancelMessage() {
  startingModal.remove();
  words.classList.remove('remove');
}
cancelBtn.addEventListener('click', cancelMessage)