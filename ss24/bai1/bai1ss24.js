let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
          ===========================================`);
    switch (choice) {
        case 1:
            n = +prompt("Nhập số lượng phần tử:");
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt("Nhập phần tử thứ: " + (i + 1));
            }
            break;
        case 2:
                console.log("Các phần tử trong mảng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i}.  ${arr[i]}`);
                }
            break;
        case 3:
            let max = arr[0];
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Giá trị lớn nhất: ${max}`);
            console.log(`Giá trị nhỏ nhất: ${min}`);    
            break;
        case 4:
            let sum=0;
            for (let i = 0; i < arr.length; i++) {
                sum+=arr[i];
            }
            console.log(`Tổng các phần tử trong mảng là: ${sum}`)
            break;
        case 5:
            let search = +prompt("Nhập một số");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === search) {
                    count++;
                }
            }
            console.log(`Số ${search} xuất hiện ${count} lần trong mảng.`);
            break;
        case 6:
            let temp;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j + 1] < arr[j]) {
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log("Mảng sau khi sắp xếp tăng dần:", arr);
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);