let name=prompt("nhap ten: ")
if(name==="ADMIN"){
    let pass=prompt("nhap passwword:")
    if(pass==="TheMaster"){
        alert("Welcome");
    }else if(pass===null){
        alert("Cancelled");
    }else{
        alert("Wrong password");
    }     
}else if(name===null){
    alert("Cancelled")
}else{
    alert("I Don’t know you");
}