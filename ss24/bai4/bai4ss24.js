let choice;
let arr = [];
let n=0;
let m=0;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình
          ===========================================`);
    switch (choice) {
        case 1:
            n = +prompt("Nhập số hàng:");
            m = +prompt("Nhập số cột:");
            for (let i = 0; i < n; i++) {
                arr[i] = [];
                for (let j = 0; j < m; j++) {
                    arr[i][j] = +prompt(`Nhập phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
                }
            }
            break;
        case 2:
            console.log("Mảng 2 chiều:");
            for (let i = 0; i < n; i++) {
                console.log(arr[i]);
            }
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử:", sum);
            break;
        case 4:
            let max = arr[0][0];
            let rowIndex=0;
            let colIndex=0;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        rowIndex=i;
                        colIndex=j;
                    }
                }
            }
            console.log(`Phần tử lớn nhất: ${max} tại hàng ${rowIndex}, cột ${colIndex}`);
            break;
        case 5:
            console.log("Trung bình cộng của từng hàng:");
            for (let i = 0; i < n; i++) {
                let sumRow = 0;
                for (let j = 0; j < m; j++) {
                    sumRow += arr[i][j];
                }
                let result = sumRow / m;
                console.log(`Hàng ${i + 1}: ${result}`);
            }
            break;
        case 6:
            console.log("Mảng sau khi đảo ngược các hàng:");
            for (let i = 0; i < n; i++) {
                arr[i].reverse();
            }
            for (let i = 0; i < n; i++) {
                console.log(arr[i]);
            }
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);