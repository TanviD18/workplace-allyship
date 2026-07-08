let musicPlaying = false;

// follow‑up messages for yes page
const struggleMessages = [
    "It’s okay to feel overwhelmed sometimes.",
    "We have a confidential support at GABLE",
    "Connect with GABLE Team",
    "You’re not alone—talk to an ally or HR for a safe space.",
    "Self-care is important; take a break when you need it."
];

const allyTips = [
    "Use people’s correct names and pronouns.",
    "Speak up if you hear exclusionary language.",
    "Educate yourself with LGBTQ+ resources and books.",
    "Ask how you can help and listen without judgment.",
    "Thank you for being an ally – your support means the world :)"
];

let struggleCount = 0;
let allyCount = 0;

// If user explicitly reloads, restart the experience from the first page.
const navEntry = performance.getEntriesByType('navigation')[0];
if (navEntry && navEntry.type === 'reload') {
    window.location.replace('index.html');
}

window.addEventListener('load', () => {
    launchConfetti();

    const music = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicHint = document.getElementById('music-hint');
    music.volume = 0.3;
    musicToggle.textContent = '🔈';

    // Resume music if it was playing on the previous page
    if (sessionStorage.getItem('allyMusicWasPlaying') === '1') {
        sessionStorage.removeItem('allyMusicWasPlaying');
        hideMusicHint();
        music.play().then(() => {
            musicPlaying = true;
            musicToggle.textContent = '🔊';
        }).catch(() => {});
    }

    music.addEventListener('error', () => {
        musicPlaying = false;
        musicToggle.textContent = '🔇';
        console.warn('Music file missing: music/musicorchestral.mp3.mpeg');
    });

    // attach follow‑up button handlers
    document.getElementById('struggle-btn').addEventListener('click', handleStruggleClick);
    document.getElementById('ally-btn').addEventListener('click', handleAllyClick);
});

function launchConfetti() {
    const colors = ['#E70000', '#FF8C00', '#FFEF00', '#00811F', '#0044FF', '#760089', '#fff'];
    const duration = 6000;
    const end = Date.now() + duration;

    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    });

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        });

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        });
    }, 300);
}

function hideMusicHint() {
    // Keep hint visible as a persistent subtle prompt.
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    hideMusicHint();
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        musicToggle.textContent = '🔈';
    } else {
        music.play().then(() => {
            musicPlaying = true;
            musicToggle.textContent = '🔊';
        }).catch(() => {
            musicPlaying = false;
            musicToggle.textContent = '🔇';
        });
    }
}

function handleStruggleClick() {
    const btn = document.getElementById('struggle-btn');
    const msg = struggleMessages[Math.min(struggleCount, struggleMessages.length - 1)];
    btn.textContent = msg;
    struggleCount++;
    // No runaway for these buttons
}

function handleAllyClick() {
    const btn = document.getElementById('ally-btn');
    const tip = allyTips[Math.min(allyCount, allyTips.length - 1)];
    btn.textContent = tip;
    allyCount++;
    // No runaway for these buttons
}