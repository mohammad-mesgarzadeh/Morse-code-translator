const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const morseCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----'
}

function toMorse(text) {
    text = text.toLowerCase();
    let result = [];

    for (let char of text) {
        if (morseCode[char]) {
            result.push(morseCode[char]);
        } else if (char === " ") {
            result.push("/");
        }
    }

    return result.join(" ");
}


translations()

function autoResize(textarea) {
    textarea.style.height = '16.6667%';
    textarea.style.height = textarea.scrollHeight + 'px';
}


function translations() {
    input1.addEventListener('input', function () {
        input2.value = toMorse(input1.value);
        autoResize(input1);
        autoResize(input2);
    });
}

translations();

if (input1.value) {
    autoResize(input1);
}

if (input2.value) {
    autoResize(input1);
}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = "01";
const size = 18;
const columns = canvas.width / size;

const rainDrops = [];

for (let i = 0; i < columns; i++) {
    rainDrops[i] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff7f";
    ctx.font = size + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * size, rainDrops[i] * size);

        if (rainDrops[i] * size > canvas.height && Math.random() > 0.97) {
            rainDrops[i] = 0;
        }

        rainDrops[i]++;
    }
}

setInterval(draw, 50);

const soundSrc = "sounds/Download.typewriter.sound2(320).mp3";

let last = 0;
const minDelay = 40;

document.addEventListener("keydown", () => {

    const now = Date.now();

    if (now - last < minDelay) return;
    last = now;

    const audio = new Audio(soundSrc);
    audio.volume = 0.8;
    audio.play();
});