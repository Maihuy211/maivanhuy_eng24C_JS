let choice;
let a = +prompt("Nhập số thứ nhất:");
let b = +prompt("Nhập số thứ hai:");
do {
    choice = +prompt(`
        1. Cộng hai số.
        2. Trừ hai số.
        3. Nhân hai số.
        4. Chia hai số.
        5. Thoát.`);

    switch (choice) {
        case 1: {
            alert(Sum(a, b));
            break;
        }
        case 2: {
            alert(minus(a, b));
            break;
        }
        case 3: {
            alert(mul(a, b));
            break;
        }
        case 4: {
            alert(divide(a, b));
            break;
        }
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 5);
function Sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
