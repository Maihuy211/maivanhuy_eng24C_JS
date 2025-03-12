// function myFn(fn){
//     fn();
//     return () => 10 ; 
// }
// myFn();
let numberList = [10, 20, 30, 40, 50, 60]
//1. forEach()
numberList.forEach(function (element, index) {
    console.log(index, element);
});// biến thể của vòn lặp để duyệt cách phần tử trong mảng
// truyền vào đối số thực tế (hàm thực sự)
// 2. map()
let newArr = numberList.map(function (element, index) {  //  giúp chuyển đổi (ánh xạ) toàn bộ phần tử trong mảng 
    return `Phần tử: ${element}`
});
console.log(newArr)
// 3. filter()
numberList.filter(function (element, index) {
    console.log(index, element);
    // return ....
});// lọc toàn bộ các phần tử trong mảng để thoả mãn điểu kiển nào đó 

// 4. Reduce
let rusult = numberList.reduce(function (acc, cur) {
    console.log("acc", acc);
    console.log("cur", cur );
    return acc + cur ;
},0);
// acc : accumulator biến tích luỹ
// cur current value giá trị hiện tại  
// có thể tích luỹ dồn co .....
console.log(rusult)