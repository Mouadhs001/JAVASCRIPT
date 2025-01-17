const texterea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = texterea.value;

  // Improvement 1: Validate if the textarea is empty
  if (!text.trim()) {
    alert("Please enter some text!");
    return;
  }

  // Check if the synthesizer is not speaking and text is available
  if (!synth.speaking && text) {
    const utterance = new SpeechSynthesisUtterance(text);

    // Improvement 2: Customize voice settings
    utterance.rate = 1;
    utterance.pitch = 1;

    // Improvement 3: Handle end of speech to reset the button state
    utterance.onend = () => {
      isSpeaking = true;
      button.innerHTML = "Convert to Speech";
    };

    synth.speak(utterance);
  }

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
