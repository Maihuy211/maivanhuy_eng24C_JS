let day=+prompt("nhap so ngay:");
let month=+prompt("nhap so thang:");
if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    alert("Bạch Dương (21/3 - 20/4)");
} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    alert("Kim Ngưu (21/4 - 20/5)");
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    alert("Song Tử (21/5 - 21/6)");
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    alert("Cự Giải (22/6 - 22/7)");
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    alert("Sư Tử (23/7 - 22/8)");
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    alert("Xử Nữ (23/8 - 22/9)");
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    alert("Thiên Bình (23/9 - 23/10)");
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    alert("Bọ Cạp (24/10 - 22/11)");
} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    alert("Nhân Mã (23/11 - 21/12)");
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    alert("Ma Kết (22/12 - 19/1)");
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    alert("Bảo Bình (20/1 - 18/2)");
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    alert("Song Ngư (19/2 - 20/3)");
} else {
    alert("Ngày sinh không hợp lệ!");
}