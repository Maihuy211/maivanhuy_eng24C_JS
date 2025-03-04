let string = prompt("moi ban nhap chuoi : ");
let search = prompt("moi ban nhap tu tim kiem:");
let length = string.length;
let flag=-1;
for(let i=0; i<length; i++){
    if(search===string[i]){
        flag=1;
        break;
    }
}
if(flag==1){
    alert('Tồn tại từ cần tìm kiếm');
}else{
    alert('Không tồn tại từ cần tìm kiếm');
}