let n = +prompt("Nhập một số nguyên:");
function primeNumber(n) {
    if (n < 2) {
        alert("Không phải số nguyên tố");
        return;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            alert("Không phải số nguyên tố");
            return;
        }
    }
    alert("Là số nguyên tố");
}
if (!Number.isInteger(n)) {
    alert("Dữ liệu không hợp lệ");
} else {
    primeNumber(n);
}
