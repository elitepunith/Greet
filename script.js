function party() {
    if (typeof confetti !== 'undefined') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        console.error("Confetti script failed to load.");
    }
}

function startTimer() {
    const end = new Date();
    end.setHours(23, 59, 59);
    
    setInterval(() => {
        const now = new Date();
        const diff = end - now;
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);
        document.getElementById('timer').innerText = `Celebrating you for the next ${h}h ${m}m ${s}s!`;
    }, 1000);
}

let isPlaying = false;
const audio = document.getElementById('audioElement');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');

const playlist = [
    "assets/song1.mp3",
    "assets/song2.mp3"
];
let currentSongIndex = 0;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = "▶️ Play";
    } else {
        if (!audio.src || audio.src.endsWith("")) {
             audio.src = playlist[currentSongIndex];
        }
        audio.play().catch(e => console.log("Make sure to add valid audio files to the playlist array!"));
        playBtn.innerText = "⏸️ Pause";
    }
    isPlaying = !isPlaying;
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    audio.src = playlist[currentSongIndex];
    if (isPlaying) {
        audio.play().catch(e => console.log("Make sure to add valid audio files to the playlist array!"));
    }
});

window.onload = () => {
    party();
    startTimer();
};