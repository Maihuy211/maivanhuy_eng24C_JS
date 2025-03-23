let button = document.getElementById("btn");
let count = 0;
button.onclick = function() {
    let text = document.getElementById("feedback").value; 
    count = document.getElementById("count"); 
    count.innerText = text.length; 
};
count.innerText= ""