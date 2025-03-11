let a=+prompt("nhap so thu nhat");
let b=+prompt("nhap so thu hai");
function sum(a,b){
    let sum=a+b;
    return sum;
}
if(Number.isInteger(a)&&Number.isInteger(b)){
    alert("tổng 2 số là: "+sum(a,b))
}else{
    alert("dữ liệu không hợp lệ")
}