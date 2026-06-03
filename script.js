const audioContext = new AudioContext();

const yesAudioElement = document.querySelector("yesAudio");
const noAudioElement = document.querySelector("noAudio");

const yesTrack = audioContext.createMediaElementSource(yesAudioElement)