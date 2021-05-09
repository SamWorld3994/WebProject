function changeBg() {
    const images = [
        'url("../image/bg1.jpg")',
        'url("../image/bg2.jpg")',
        'url("../image/bg3.jpg")',
        'url("../image/bg4.jpg")',
    ]
    const section = document.querySelector('section')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;

}
setInterval(changeBg, 3000)