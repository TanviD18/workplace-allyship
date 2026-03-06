let musicPlaying = false;

// follow‑up messages for yes page
const struggleMessages = [
    "It’s okay to feel overwhelmed sometimes.",
    "We have a confidential support line: 1-800-XXX-XXXX.",
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
let struggleRunaway = false;
let allyRunaway = false;

window.addEventListener('load', () => {
    launchConfetti();

    const music = document.getElementById('bg-music');
    music.volume = 0.3;
    music.play().catch(() => {});
    musicPlaying = true;
    document.getElementById('music-toggle').textContent = '🔊';

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

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('music-toggle').textContent = '🔇';
    } else {
        music.play();
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }
}

function enableRunaway(btn) {
    btn.addEventListener('mouseover', () => runAway(btn));
    btn.addEventListener('touchstart', () => runAway(btn), { passive: true });
}

function runAway(btn) {
    const margin = 20;
    const btnW = btn.offsetWidth;
    const btnH = btn.offsetHeight;
    const maxX = window.innerWidth - btnW - margin;
    const maxY = window.innerHeight - btnH - margin;

    const randomX = Math.random() * maxX + margin / 2;
    const randomY = Math.random() * maxY + margin / 2;

    btn.style.position = 'fixed';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
    btn.style.zIndex = '50';
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