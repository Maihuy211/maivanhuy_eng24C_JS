let arr = [];
let n=+prompt("nhap so luong phan tu:");
let count = 0;
let arr2="";
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i]=+prompt("nhap phan tu: "+(i+1));
        if (!isNaN(parseInt(arr[i]))) {
            count++;
            arr2 += arr[i] + " ";
        }
    }
    if (count === 0) {
        alert("Không có ký tự là số");
    } else {
        alert(arr2)
    }
} else {
    alert("Không có ký tự số");
}