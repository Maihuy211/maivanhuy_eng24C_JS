let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4. Tính tổng và trung bình cộng của các số dương trong mảng
        5. Đảo ngược mảng
        6. Kiểm tra mảng có đối xứng không
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
            let maxIndex = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    maxIndex = i;
                }
            }
            console.log(`Giá trị lớn nhất: ${max}, vị trí: ${maxIndex}`);
            break;
        case 4:
            let sum = 0, count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            if (count > 0) {
                console.log(`Trung bình cộng của các số dương trong mảng: ${sum / count}`);
            } else {
                console.log("Không có số dương trong mảng");
            }
            break;
        case 5:
            arr.reverse();
            console.log("Mảng sau khi đảo ngược:", arr);  
            break;
        case 6:
            let arr2 = []; 
            for (let i = arr.length - 1; i >= 0; i--) {
                arr2.push(arr[i]); 
            }
            let doixung= true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== arr2[i]) {
                    doixung = false;
                    break;
                }
            }
            if(doixung) {
                console.log("Mảng đối xứng.");
            } else {
                console.log("Mảng không đối xứng.");
            }
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);