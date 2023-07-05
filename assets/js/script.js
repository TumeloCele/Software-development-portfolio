const playPauseBtn = document.getElementById('play-pause-btn');
const audioPlayer = document.getElementById('audio-player');
const progressBar = document.getElementById('progress')

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play()
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currenTime / audioPlayer.duration) * 100;
    progressBar.style.width ='${progress}%';
})

function updateClock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // format the time with leading zeros
    hours =  hours.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')
    seconds = seconds.toString().padStart(2, '0')

    var timeString = hours + ':' + minutes + ':' + seconds;
    

    // Display the time
    var clockElement = document.getElementById('clock');
    clockElement.textContent = timeString
}

// Update the clock every second
setInterval(updateClock, 1000);