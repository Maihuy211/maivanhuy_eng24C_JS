let arr=[5, 8, 6, 3, 4, 2, 7];
let even = arr.filter(function(element) {
    return element%2===0;
}).sort((a, b) => a - b);;
if (even.length === 0) {
    console.log("Không có số chẵn trong mảng");
} else {
    let evenIndex = 0;
    let result = arr.map(function(element) {
        if (element % 2 === 0) {
            let temp = even[evenIndex];
            evenIndex++;
            return temp;
        }
        return element;
    });
    console.log("Mảng sau khi thay thế số chẵn:", result);
}