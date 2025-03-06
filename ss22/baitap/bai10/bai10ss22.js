let choice;
let array = [];
let n;
do {
    choice = +prompt(`
        1. Nhập vào mảng
        2. Hiển thị mảng
        3. Thêm phần tử 
        4. Sửa phần tử
        5. Xoá phần tử 
        6. Thoát`);

    switch (choice) {
        case 1:
            n = +prompt("nhập số lượng phần tử:");
            array = [];
            for (let i = 0; i < n; i++) {
                array[i] = +prompt("nhập phần tử " + (i+1));
            }
            break;
        case 2:
            for (let i = 0; i < array.length; i++) {
                console.log(`${i}. ${array[i]}`);
            }
            break;
        case 3:
            let addNumber = +prompt("nhập số lượng phần tử muốn thêm:");
            let addIndex = +prompt("nhập vào vị trí muốn thêm phần tử:");
            if (addIndex >= 0 && addIndex < array.length) {
                for (let i = 0; i < addNumber; i++) {
                    let addValue = +prompt("nhập phần tử muốn thêm:");
                    array.splice(addIndex, 0, addValue);
                }
            }else{
                alert("vị trí không hợp lệ.");
            }
            break;
        case 4:
            let upIndex = +prompt("nhập vào vị trí muốn sửa:");
            let newValue = +prompt("nhập giá trị mới:");
            if (upIndex >= 0 && upIndex < array.length) {
                array[upIndex] = newValue;
            } else {
                alert("vị trí không hợp lệ.");
            }
            break;
        case 5:
            let delIndex = +prompt("nhập vào vị trí muốn xoá:");
            let delNumber = +prompt("nhập số lượng phần tử muốn xoá:");
            if (delIndex >= 0 && delIndex < array.length) {
                array.splice(delIndex, delNumber);
            } else {
                alert("vị trí không hợp lệ.");
            }
            break;
        case 6:
            alert("thoát chương trình.");
            break;
        default:
            alert("không hợp lệ.");
    }
} while (choice !== 6);