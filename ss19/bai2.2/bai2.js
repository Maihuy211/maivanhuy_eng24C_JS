let math= +(prompt("nhap diem mon toan"));
let literature= +(prompt("nhap diem mon van"));
let english= +(prompt("nhap diem mon anh"));
let resul=((math+literature+english)/3).toFixed(2);
if(resul>=8){
    alert("gioi");
}else if (6.5<=resul&&resul<=7.9){
    alert("kha");
}else if(5<=resul&&resul<=6.4){
    alert("trung binh");
}else{
    alert("kem");
}