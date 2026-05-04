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

window.onload = () => {
    party();
    startTimer();
};