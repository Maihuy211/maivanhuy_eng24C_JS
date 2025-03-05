let soTien = +prompt("Nhập số tiền cần rút");
let soTo500 = 0;
let soTo200 = 0;
let soTo100 = 0;
let soTo50 = 0;
let soTo20 = 0;
let soTo10 = 0;
let soTo5 = 0;
let soTo2 = 0;
let soTo1 = 0;

if (soTien % 1000 === 0) {
    while (soTien > 0) {
        if (soTien >= 500000) {
            soTien -= 500000;
            soTo500++;
        } else if (soTien >= 200000) {
            soTien -= 200000;
            soTo200++;
        } else if (soTien >= 100000) {
            soTien -= 100000;
            soTo100++;
        } else if (soTien >= 50000) {
            soTien -= 50000;
            soTo50++;
        } else if (soTien >= 20000) {
            soTien -= 20000;
            soTo20++;
        } else if (soTien >= 10000) {
            soTien -= 10000;
            soTo10++;
        } else if (soTien >= 5000) {
            soTien -= 5000;
            soTo5++;
        } else if (soTien >= 2000) {
            soTien -= 2000;
            soTo2++;
        } else {
            soTien -= 1000;
            soTo1++;
        }
    }
    document.write("500.000- " + soTo500 + " tờ <br>");
    document.write("200.000- " + soTo200 + " tờ <br>");
    document.write("100.000- " + soTo100 + " tờ <br>");
    document.write("50.000- " + soTo50 + " tờ <br>");
    document.write("20.000- " + soTo20 + " tờ <br>");
    document.write("10.000- " + soTo10 + " tờ <br>");
    document.write("5.000- " + soTo5 + " tờ <br>");
    document.write("2.000- " + soTo2 + " tờ <br>");
    document.write("1.000- " + soTo1 + " tờ <br>");
} else {
    alert("không hợp lệ");
}
