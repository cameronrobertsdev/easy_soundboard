const audioContext = new AudioContext();

const yesAudioElement = document.querySelector("#yesAudio");
const noAudioElement = document.querySelector("#noAudio");

const yesTrack = audioContext.createMediaElementSource(yesAudioElement);
const noTrack = audioContext.createMediaElementSource(noAudioElement);

yesTrack.connect(audioContext.destination);
noTrack.connect(audioContext.destination);

const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");

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

noButton.addEventListener("pointerdown", () =>{

    yesButton.dataset.playing = "false";
    noButton.dataset.playing = "false";
    

    if(audioContext.state === "suspended"){
        audioContext.resume();
    }
    if(noButton.dataset.playing === "false"){
        noAudioElement.play();
        noButton.dataset.playing  = "true";
    }
    else if (noButton.dataset.playing === "true"){
        noAudioElement.pause();
        noButton.dataset.playing = "false";
    }

});

yesAudioElement.addEventListener("ended", () => {
    yesButton.dataset.playing = "false";
});