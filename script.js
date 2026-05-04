const playlist = [
    { title: "Our Favorite Song", file: "song1.mp3" },
    { title: "That One Funny Reel", file: "song2.mp3" },
    { title: "Birthday Vibes", file: "song3.mp3" }
];

let currentTrackIndex = 0;
const audioEl = document.getElementById("my-audio");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const trackNameDisplay = document.getElementById("track-name");

function loadSong(index) {
    audioEl.src = playlist[index].file;
    trackNameDisplay.innerText = playlist[index].title;
}

function togglePlay() {
    if (audioEl.paused) {
        audioEl.play();
        playBtn.innerText = "⏸️"; 
    } else {
        audioEl.pause();
        playBtn.innerText = "▶️"; 
    }
}

function nextSong() {
    currentTrackIndex++;
    if (currentTrackIndex > playlist.length - 1) {
        currentTrackIndex = 0; 
    }
    loadSong(currentTrackIndex);
    audioEl.play();
    playBtn.innerText = "⏸️";
}

playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
audioEl.addEventListener("ended", nextSong);

loadSong(currentTrackIndex);