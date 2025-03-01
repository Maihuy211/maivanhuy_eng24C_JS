let a=+prompt("nhap canh a:");
let b=+prompt("nhap canh b:");
let c=+prompt("nhap canh c:");
if(a+b>c || a+c>b || b+c >a){
    if (a === b && a === c) {
        alert("la tam giac deu");
    } else if (a == b || b === c || a === c) {
        alert('la tam giac can');
    }else if(a*a===b*b+c*c||b*b===a*a+c*c||c*c===b*b+a*a){
        alert("tam giac vuong");
    }else{
        alert("tam giac thuong");
    }
}else{
    alert("khong phai tam giac :<")
}