let choice;
let arr = [];
let n;
do {
    choice = +prompt(`  ================== MENU ===================
        1. Nhập mảng số nguyên
        2. Hiển thị mảng
        3. Tìm các phần tử chẵn và lẻ
        4. Tính trung bình cộng của mảng
        5. Xóa phần tử tại vị trí chỉ định
        6. Tìm phần tử lớn thứ hai trong mảng
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
            let odd=[];
            let even=[];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i]%2===0) {
                    even.push(arr[i]);
                }
                if (arr[i]%2!==0) {
                    odd.push(arr[i]);
                }
            }
            console.log(`Phần tử chẵn trong mảng là: ${even}`);
            console.log(`Phần tử lẻ trong mảng là: ${odd}`);    
            break;
        case 4:
            let sum=0;
            for (let i = 0; i < arr.length; i++) {
                sum+=arr[i];
            }
            sum=sum/arr.length;
            console.log(`Trung bình cộng của mảng là: ${sum}`)
            break;
        case 5:
            let delIndex = +prompt("Nhập vào vị trí muốn xoá:");
            if (delIndex >= 0 && delIndex < arr.length) {
                arr.splice(delIndex, 1);
                console.log("Mảng sau khi xoá:", arr);
            } else {
                alert("Vị trí không hợp lệ.");
            }
            break;
        case 6:
            let max = arr[0];
            let max2;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max2 = max;
                    max = arr[i];
                } else if (arr[i] < max) {
                    max2 = arr[i];                
                }
            }
            console.log("Phần tử lớn thứ hai trong mảng là :", max2);
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);