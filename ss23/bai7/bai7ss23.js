let arr=[];
let n=+prompt("nhap so luong phan tu:");
let count=0;
let max;
let max2;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i]=+prompt("nhap phan tu: "+(i+1));
    }
    let max = arr[0];
    let max2;
    for (let i = 1; i < n; i++) {
        if (arr[i] > max) {
            max2 = max;
            max = arr[i];
        } else if (arr[i] < max) {
            max2 = arr[i];                
        }
    }
    alert(max2);
}else if(n===0){
    alert("mảng ko có phần tử")
}else{
    alert("số lượng phần tử ko hợp lệ ")
}
