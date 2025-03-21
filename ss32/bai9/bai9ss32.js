let increase = document.getElementById("increase");
let dicrease = document.getElementById("dicrease");
let progress = document.getElementById("progress");
let size = 0;
let opacity = 0;

increase.onclick = function () {
    if (size < 600) {
        size += 60;
        opacity += 0.1;
        progress.style.width = size + "px";
        updateBackground();
    }
};

dicrease.onclick = function () {
    if (size > 0) {
        size -= 60;
        opacity -= 0.1;
        progress.style.width = size + "px";
        updateBackground();
    }
};
function updateBackground() {
    document.body.style.background = `rgba(0, 0, 0, ${opacity})`;
}