let n=+prompt(`nhap loai tien ban muon doi: 
    1: VND 
    2: USD`);
switch(n){
    case 1:
        let vnd=+prompt("nhap so tien");
        vnd=vnd*23000;
        alert(vnd+" VND");
        break;
    case 2:
        let usd=+prompt("nhap so tien");
        usd=usd/23000;
        alert(vnd+" VND");
        break;
    default:
        alert("khong hop le")
}