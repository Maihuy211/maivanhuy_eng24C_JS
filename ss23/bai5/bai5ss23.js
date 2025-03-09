let arr = [];
let n=+prompt("nhap so luong phan tu:");
let count = 0;
let sum=0;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i]=+prompt("nhap phan tu: "+(i+1));
        if (!isNaN(parseInt(arr[i]))) {
            sum+=arr[i];
            count++;
        }
    }
    if (count === 0) {
        alert("Không có ký tự là số");
    } else {
        alert(sum);
    }
} else {
    alert("Không có ký tự số");
}