let number=[2,5,7,4,1,6,8];
let n=+prompt("nhập số bất kì để tìm kiếm: ");
let search=number.includes(n)
if(search===true){
    alert("Bingo");
}else{
    alert("chúc bạn may mắn lần sau");
}