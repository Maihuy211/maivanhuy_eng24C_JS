let a = +prompt("nhap so nguyen :");
let b = +prompt("nhap so mu :");
let result=a;
if(Number.isInteger(a)==true && Number.isInteger(b)==true){
    for (let i=1; i<b; i++){
        result*=a;
    }
    alert(result);
}else{
    alert("khong hop le");
}