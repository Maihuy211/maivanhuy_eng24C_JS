let number = +prompt("moi ban nhap so nguyen");
for(let i=1; i<=number;i++){
    if (number < 10) {
        switch (number) {
            case 2:
            case 3:
            case 5:
            case 7:
                alert("la so nguyen to");
                break;
            default:
                alert("khong phai so nguyen to ");
                break;
        }
    }else if(number%2!==0&&number%3!==0&&number%5!==0&&number%7!==0){
        alert("la so nguyen to");
    }else{
        alert("khong phai so nguyen to ");
    }
    break;
}
