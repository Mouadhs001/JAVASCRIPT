const texterea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = texterea.value;

  if (!synth.speaking && text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }

  if (text.length > 50) {
    if (synth.speaking && isSpeaking) {
      button.innerHTML = "Pause";
      synth.resume();
      isSpeaking = false;
    } else {
      button.innerHTML = "Resume";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    button.innerHTML = "Speaking";
  }

  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      button.innerHTML = "Convert to Speech";
    }
  });
};

button.addEventListener("click", textToSpeech);