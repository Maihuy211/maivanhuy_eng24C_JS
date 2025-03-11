let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [];
function odd() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
if (arr.length === 0) {
    alert("Mảng không chứa phần tử");
} else {
    let count = true;
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            count = false;
            break;
        }
    }
    if (!count) {
        alert("Dữ liệu ko hợp lệ");
    } else {
        odd(); 
        alert(arr2); 
    }
}