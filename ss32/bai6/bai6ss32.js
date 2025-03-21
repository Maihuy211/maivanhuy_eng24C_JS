let increase = document.getElementById("increase");
let dicrease = document.getElementById("dicrease");
let title = document.getElementById("title");
let count = 20;
increase.onclick = function(){
    count += 1;
    title.style.fontSize = count + "px";
}
dicrease.onclick = function(){
    count -= 1;
    title.style.fontSize = count + "px";
}