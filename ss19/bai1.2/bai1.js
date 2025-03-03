let month=+prompt("nhap thang");
let year=+prompt("nhap nam")
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("tháng "+month+" có 31 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("tháng "+month+" có 30 ngày");
        break;
    case 2:
        if (((year % 4 === 0) && (year % 100!== 0)) || (year%400 === 0)){
            alert("tháng "+month+" có 29 ngày");
        }else{
            alert("tháng "+month+" có 28 ngày");
        }
        break;
    default:
        alert("thang khong hop le");
}