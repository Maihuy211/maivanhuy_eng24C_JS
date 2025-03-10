let choice;
let arr = [];
let n=0;
let m=0;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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
            let sumMain=0;
            for( let i = 0 ; i < n ; i++){
                sumMain+=arr[i][i];
            }
            console.log("Tổng đường chéo chính là:", sumMain);
            break;
        case 5:
            let sumEx=0;
            for( let i = 0 ; i < n ; i++){
                sumEx+=arr[i][n-1-i];
            }
            console.log("Tổng đường chéo phụ là:", sumEx);
            break;
            case 6:
                let choice1;
                do {
                    choice1 = +prompt(`
        1. Trung bình cộng theo hàng
        2. Trung bình cộng theo cột
        3. Thoát`);
                    switch (choice1) {
                        case 1:
                            let addrows = +prompt("Nhập chỉ số hàng  ");
                            if (addrows >= 0 && addrows < n) {
                                let sum1 = 0;
                                for (let j = 0; j < m; j++) {
                                    sum1 += arr[addrows][j];
                                }
                                let result = sum1 / m;
                                console.log(`Trung bình cộng hàng ${addrows} là: ${result}`);
                            } else {
                                console.log("Chỉ số hàng không hợp lệ");
                            }
                            break;
                        case 2:
                            let addcols = +prompt("Nhập chỉ số cột ");
                            if (addcols >= 0 && addcols < m) {
                                let sum2 = 0;
                                for (let i = 0; i < n; i++) {
                                    sum2 += arr[i][addcols];
                                }
                                let result = sum2 / n;
                                console.log(`Trung bình cộng cột ${addcols} là: ${result}`);
                            } else {
                                console.log("Chỉ số cột không hợp lệ");
                            }
                            break;
                        case 3:
                            break;
                        default:
                            alert("Lựa chọn không hợp lệ");
                    }
                } while (choice1 !== 3);
                break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);