let subject = [];
let add  = document.getElementById("btn");
function renderSubject(){
    let listSubject = document.getElementById("subject");
    listSubject.innerHTML = ""; 
    subject.forEach(function(item){ 
        listSubject.innerHTML += `<li>${item.task}</li>`;
    });
}

add.onclick = function(){
    addSubject();
}
function addSubject(){
    let inputElement = document.getElementById("input");
    let inputValue = inputElement.value; 
    if (inputValue === "") {
        alert("Vui lòng nhập nội dung!");
        return;
    }
    let todo = { 
        task: inputValue 
    };
    subject.push(todo);
    renderSubject();
}
renderSubject();
