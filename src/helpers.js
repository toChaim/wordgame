export const baseFilter = { pos: '', level: '' };

export const makeFilter = (filterObj) => {
  return ([, wordObj]) => {
    const entries = Object.entries(filterObj);
    if (entries.length === 0) {
      return true;
    }
    return entries.every(([key, value]) =>
      value ? wordObj[key].includes(value) : true,
    );
  };
};

export const useSpeechSynthesis = () => {
  const synth = window.speechSynthesis;
  const say = (text) => synth.speak(new SpeechSynthesisUtterance(text));
  return { say, synth };
};

export const useSpeechRecognition = (onresult) => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (event) => {
    console.log(event.results[0][0], event);
    onresult(event.results[0][0].transcript, event.results[0][0].confidence);
  };

  return recognition;
};
