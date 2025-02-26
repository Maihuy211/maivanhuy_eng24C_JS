let a = Number(prompt("nhap so thu nhat:"));
let b = Number(prompt("nhap so thu hai:"));
let c = Number(prompt("nhap so thu ba:"));
if(a>b && a>c){
    alert(a);
}else if(b>a && b>c){
    alert(b);
}else{
    alert(c);
}