let year=+prompt("nhap nam:");
if (((year % 4 === 0) && (year % 100!== 0)) || (year%400 === 0)){
    alert(year + " la nam nhuan ");
}else{
    alert(year + " ko phai nam nhuan ");
}