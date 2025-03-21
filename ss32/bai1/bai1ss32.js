let button = document.getElementById("change-Background");
let div = document.getElementById("container");
let randomRGB = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    newColor =  r * 0.299 + g * 0.587 + b * 0.114
    return `rgb(${r}, ${g}, ${b})`;
    }
button.onclick = function() {
    div.style.backgroundColor = randomRGB();
}