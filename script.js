const audioContext = new AudioContext();

const yesAudioElement = document.querySelector("#yesAudio");
const noAudioElement = document.querySelector("#noAudio");

const yesTrack = audioContext.createMediaElementSource(yesAudioElement);

yesTrack.connect(audioContext.destination);

const yesButton = document.querySelector("#yesButton");

yesButton.addEventListener("pointerdown", () =>{

    if(audioContext.state === "suspended"){
        audioContext.resume();
    }
    if(yesButton.dataset.playing === "false"){
        yesAudioElement.play();
        yesButton.dataset.playing  = "true";
    }
    else if (yesButton.dataset.playing === "true"){
        yesAudioElement.pause();
        yesButton.dataset.playing = "false";
    }

});

yesAudioElement.addEventListener("ended", () => {
    yesButton.dataset.playing = "false";
});