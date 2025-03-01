// yeu cau 1
let salary=+prompt("nhap so tien ");
if (salary<5){
    alert("thue suat 0");
}else if (5<=salary&&salary<10){
    alert("thue suat" + salary*5/100);
}else if (10<=salary&&salary<18){
    alert("thue suat" + salary*10/100);
}else if (18<=salary&&salary<32){
    alert("thue suat" + salary*15/100);
}else{
    alert("thue suat" + salary*20/100);
}