let btn = document.getElementById("btn");
let div = document.getElementById("modal-content");
let body = document.getElementById("body");
let close = document.getElementById("closeModal")
btn.onclick = function () {
    div.style.display= "block"
    body.style.backgroundColor="gray"
}
close.onclick = function () {
    div.style.display= "none"
    body.style.backgroundColor="white"

}

