let amount = Number(prompt("so tien gui"));
let month = Number(prompt("so thang gui"));
if (amount < 0){
    alert("nhap lai so tien gui");
    let amount = Number(prompt("nhap so tien gui"));
}else if(month < 0){
    alert("nhap lai so thang gui");
    let month = Number(prompt("nhao so thang gui"));
}
let total = Math.abs(amount*((0.043 * 1/12)) *month);
alert(total);