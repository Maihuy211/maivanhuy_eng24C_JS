let hour = +prompt("nhap giờ ( 0 - 23 ):");
let minute = +prompt("nhap phút ( 0 - 59 ):");
let second= +prompt("nhap giây ( 0 - 59 ):");
if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
    let period = "AM";

    if (hour == 0) {
        hour = 12;
    } else if (hour == 12) {
        period = "PM";
    } else if (hour > 12) {
        hour -= 12;
        period = "PM";
    }

    alert(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} ${period}`);
} else {
    alert("thoi gian ko jop le");
}