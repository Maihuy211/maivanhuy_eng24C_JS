let arr = [-4, -6, -2];
function positive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }
    return count;
}
if (arr.length === 0) {
    alert("Mảng không chứa phần tử");
} else {
    let count = positive(arr); 
    if (count === 0) {
        alert("Không có số nguyên dương trong mảng");
    } else {
        alert(count);
    }
}