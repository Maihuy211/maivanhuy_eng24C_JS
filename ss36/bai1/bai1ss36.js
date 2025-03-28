let buttonSave = document.getElementById("btn-save");
let change = document.getElementById("changeButton");
let hello = document.getElementById("hello");
let containerForm = document.getElementById("container-form");
let inputName = document.getElementById("name");
let user = document.getElementById("user");
buttonSave.onclick = function(){
    let nameValue = inputName.value;
    hello.style.display = "block";
    containerForm.style.display = "none"
    HelloUser(nameValue)    
    localStorage.setItem("Name",JSON.stringify(nameValue));
}
change.onclick = function(){
    hello.style.display = "none";
    containerForm.style.display = "block";
    localStorage.removeItem("Name");
}
function HelloUser(name){
    user.innerHTML = `👋 Chào bạn, ${name} !`
}
let savedName = localStorage.getItem("Name");
if (savedName) {
    savedName = JSON.parse(savedName);
    HelloUser(savedName); 
    containerForm.style.display = "none";
    hello.style.display = "block";
} else {
    hello.style.display = "none";
}