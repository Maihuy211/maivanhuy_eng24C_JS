let user = +prompt("nhap so du");
let choice = +prompt(`nhap lua chon: 
    1: nap tien
    2: rut tien `);
switch(choice){
    case 1:
        let nap = +prompt("nhap so tien muon nap");
        if(nap < 0){
            alert("ko thanh con");
        }else {
            alert("thanh cong");
        }
        break;
    case 2:
        let rut = +prompt("nhap so tien muon rut");
        if(rut > user){
            alert("ko hop le");
        }else if(rut < 0){
            alert("ko hop le");
        }else {
            alert("thanh cong")
        }
        break;
    default:
        alert("lua chon ko hop le");
}