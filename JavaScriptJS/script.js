const emojisDulces = ['🍬', '🍭', '🍫', '🧁', '🍪', '🍮'];
function crearDulce() {
    const dulce = document.createElement('div');
    dulce.classList.add('dulce');
    dulce.innerText = emojisDulces[Math.floor(Math.random() * emojisDulces.length)];
    dulce.style.left = Math.random() * window.innerWidth + 'px';
    const tamaño = Math.random() * 25 + 20;
    dulce.style.fontSize = tamaño + 'px';
    const duracion = Math.random() * 3 + 3;
    dulce.style.animationDuration = duracion + 's';
    document.body.appendChild(dulce);
    setTimeout(() => {
        dulce.remove();
    }, duracion * 1000);
}
setInterval(crearDulce, 300);