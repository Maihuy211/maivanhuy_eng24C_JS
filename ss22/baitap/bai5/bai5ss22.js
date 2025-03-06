let n = +prompt("nhập số lượng phần tử:");
let array = [];
let odd=0;
let even=0;
for (let i = 0; i < n; i++) {
    array[i] = +prompt("nhập phần tử " + (i+1));
    if(array[i]%2===0){
        odd+=array[i];
    }else{
        even+=array[i];
    }
}
alert(`tổng số chẵn trong mảng: ${odd}
    tổng số lẻ trong mảng: ${even}`)