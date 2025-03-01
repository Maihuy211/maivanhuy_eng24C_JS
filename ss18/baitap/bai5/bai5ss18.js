let year=+prompt("nhap nam:");
if(year<1){
    alert("Mới vào nghề");
}else if(1<=year&&year<=3){
    alert("Nhân viên có kinh nghiệm");
}else if(4<=year&&year<=6){
    alert("Chuyên viên");
}else{
    alert("Quản lý");
}