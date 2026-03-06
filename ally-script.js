// copy of the interactive logic, re-themed for allyship
// gifs are left as local placeholders so you can drop in custom imagery
// create a "gifs" directory and add files named neutral.gif, confused.gif, etc.
const gifStages = [
    "gifs/neutral.gif",     // 0 neutral/handshake image
    "gifs/confused.gif",    // 1 confused/question mark
    "gifs/sad.gif",         // 2 sad expression
    "gifs/closet.gif",      // 3 closet/hidden identity
    "gifs/teary.gif",       // 4 teary-eyed
    "gifs/overwhelmed.gif", // 5 overwhelmed/stressed
    "gifs/runaway.gif"      // 6 running away
];

const noMessages = [
    "No, I don't feel safe being open.",
    "I often hide who I am at work.",
    "Offhand comments sting.",
    "I worry about being passed over for promotions.",
    "There are no role models I can relate to.",
    "I get microaggressions every day.",
    "I dread team events because I can't be myself.",
    "It feels like I must live in the closet.",
    "It's exhausting keeping this secret."
];

const yesTeasePokes = [
    "Click No first – hear some of the struggles.",
    "You might not realize how hard it can be...",
    "I'm sharing these so allies can learn.",
    "Go on, press No; every story matters."
];

let yesTeasedCount = 0;
let noClickCount = 0;
let runawayEnabled = false;
let musicPlaying = true;

const catGif = document.getElementById('cat-gif');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const music = document.getElementById('bg-music');

// Autoplay handling (same as original)
music.muted = true;
music.volume = 0.3;
music.play().then(() => {
    music.muted = false;
}).catch(() => {
    document.addEventListener('click', () => {
        music.muted = false;
        music.play().catch(() => {});
    }, { once: true });
});

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('music-toggle').textContent = '🔇';
    } else {
        music.muted = false;
        music.play();
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }
}

function handleYesClick() {
    if (!runawayEnabled) {
        const msg = yesTeasePokes[Math.min(yesTeasedCount, yesTeasePokes.length - 1)];
        yesTeasedCount++;
        showTeaseMessage(msg);
        return;
    }
    window.location.href = 'ally-yes.html';
}

function showTeaseMessage(msg) {
    const colors = ['#e74c3c', '#27ae60', '#3498db', '#e74c3c']; // red, green, blue, red
    let toast = document.getElementById('tease-toast');
    toast.textContent = msg;
    toast.style.color = colors[Math.min(yesTeasedCount - 1, colors.length - 1)];
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2500);
}

function handleNoClick() {
    // Hide any showing tease message immediately
    const toast = document.getElementById('tease-toast');
    clearTimeout(toast._timer);
    toast.classList.remove('show');
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(6px)';

    noClickCount++;
    // determine which message to show; initially go through the list one by one
    // once we've shown the last entry we begin cycling. the first entry in the
    // cycle should be the final message itself ("It's exhausting keeping this
    // secret.") so it feels like the last value is still "stuck" and then it
    // rolls forward from there.
    let msgIndex;
    if (noClickCount <= noMessages.length) {
        // normal progression: click 1 → index 0, click 2 → index 1, …
        msgIndex = noClickCount - 1;
    } else {
        // overflow: start cycling beginning at last message, then wrap to the
        // start of the array.
        const overflow = noClickCount - noMessages.length;
        msgIndex = (noMessages.length - 1 + overflow - 1) % noMessages.length;
    }
    noBtn.textContent = noMessages[msgIndex];

    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.35}px`;
    const padY = Math.min(18 + noClickCount * 5, 60);
    const padX = Math.min(45 + noClickCount * 10, 120);
    yesBtn.style.padding = `${padY}px ${padX}px`;

    // Dramatic scale animation on yes button
    yesBtn.style.animation = 'none';
    setTimeout(() => {
        yesBtn.style.animation = 'buttonPulse 1.5s ease-in-out infinite';
    }, 10);

    if (noClickCount >= 2) {
        const noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        noBtn.style.fontSize = `${Math.max(noSize * 0.85, 10)}px`;
    }

    // Visual intensity increases with each click
    if (noClickCount === 1) {
        noBtn.style.background = 'linear-gradient(135deg, #c0392b, #8b2e1f)';
    } else if (noClickCount === 3) {
        noBtn.style.background = 'linear-gradient(135deg, #a93226, #6a1f15)';
    } else if (noClickCount === 4) {
        noBtn.style.background = 'linear-gradient(135deg, #922b21, #5a1b11)';
    }

    const gifIndex = Math.min(noClickCount, gifStages.length - 1);
    swapGif(gifStages[gifIndex]);

    if (noClickCount >= 5 && !runawayEnabled) {
        enableRunaway();
        runawayEnabled = true;
    }
}

function swapGif(src) {
    catGif.style.opacity = '0';
    catGif.style.animation = 'none';
    setTimeout(() => {
        catGif.src = src;
        catGif.style.animation = 'gifPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        catGif.style.opacity = '1';
    }, 200);
}

function enableRunaway() {
    noBtn.addEventListener('mouseover', runAway);
    noBtn.addEventListener('touchstart', runAway, { passive: true });
}

function runAway() {
    const margin = 20;
    const btnW = noBtn.offsetWidth;
    const btnH = noBtn.offsetHeight;
    const maxX = window.innerWidth - btnW - margin;
    const maxY = window.innerHeight - btnH - margin;

    const randomX = Math.random() * maxX + margin / 2;
    const randomY = Math.random() * maxY + margin / 2;

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = '50';
}
