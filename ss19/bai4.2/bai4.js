let salary=+prompt("nhap so tien ");
if(salary>0){
    if (salary<500000){
        alert("thue suat " + salary*5/100);
    }else if (500000<=salary&&salary<1000000){
        alert("thue suat " + salary*10/100);
    }else{
        alert("thue suat " + salary*15/100);
    }
}else{
    alert("so tien ko hop le");
}