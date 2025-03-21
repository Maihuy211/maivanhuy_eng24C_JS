let count = 0;
let button = document.getElementById("btn");
let counts = document.getElementById("count");
button.onclick = function () {
    count++;
    counts.textContent = count ;
}