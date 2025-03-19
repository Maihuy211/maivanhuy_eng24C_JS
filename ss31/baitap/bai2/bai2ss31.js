let button= document.getElementById("btn");
let div = document.getElementById("text");
button.onclick = function() {
    if(div.style.backgroundColor=="white"){
        div.style.backgroundColor="black"
        div.style.color= "white"
    }else{
        div.style.backgroundColor= "white"
        div.style.color= "black"
    }
}

