var playAudio = document.getElementById('play-audio');

var playPause = function () {
    if (playAudio.paused) {

        playAudio.play();
        }

    else {
        playAudio.pause();

        }
    }