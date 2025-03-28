let btn = document.getElementById("dark-mode-toggle");
let div = document.getElementById("body");
let title = document.getElementById("container-title");
let nav = document.getElementById("navbar");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card = document.getElementsByClassName("product-card");
let buy1 = document.getElementById("buy-btn1");
let buy2 = document.getElementById("buy-btn2");
let buy3 = document.getElementById("buy-btn3");

function toggleDarkMode(enable) {
    if (enable) {
        div.style.backgroundColor = "black";
        div.style.color = "white";
        title.style.color = "white";
        nav.style.backgroundColor = "#333333";
        card1.style.backgroundColor = "#333333";
        card2.style.backgroundColor = "#333333";
        card3.style.backgroundColor = "#333333";
        buy1.style.backgroundColor = "#e67e22";
        buy2.style.backgroundColor = "#e67e22";
        buy3.style.backgroundColor = "#e67e22";

        localStorage.setItem("darkMode", "enabled");
    } else {
        div.style.backgroundColor = "white";
        div.style.color = "black";
        title.style.color = "black";
        nav.style.backgroundColor = "white";
        card1.style.backgroundColor = "white";
        card2.style.backgroundColor = "white";
        card3.style.backgroundColor = "white";
        buy1.style.backgroundColor = "#3498db";
        buy2.style.backgroundColor = "#3498db";
        buy3.style.backgroundColor = "#3498db";

        localStorage.setItem("darkMode", "disabled");
    }
}

if (localStorage.getItem("darkMode") === "enabled") {
    toggleDarkMode(true);
}
btn.onclick = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        toggleDarkMode(false);
    } else {
        toggleDarkMode(true);
    }
};