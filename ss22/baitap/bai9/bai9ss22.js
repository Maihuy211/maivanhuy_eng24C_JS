let number = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
document.write("Mảng ban đầu là: " + number + "<br>");
number.sort();
for (let i = 0; i < number.length - 1; ) {
    if (number[i] === number[i + 1]) {
        number.splice(i + 1, 1); 
    } else {
        i++; 
    }
}
document.write("Mảng sau khi xóa trùng: " + number);