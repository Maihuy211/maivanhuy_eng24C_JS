// khai bao ham thông thường 
// input
// process
// output
// hàm tính tổng
// tham số - parameters
function calculateSum(number1, number2){
    //logic 
    // let number1 = 21;
    // let number2 = 10;
    return number1+number2;
}
// function excution 
// thực thi hàm
// đối số thực thế 
// arguments
let sum=calculateSum(21, 10);// output: 31
console.log(sum);
calculateSum(-1, 2); // output: 1 

mayPhaCaPhe("hạt cà phê", "nước", "đường")//
// cách 2 IIFE - immediately Invoking function Expression
let result = (function(a,b){
    return a*b;
})(21, 20);
console.log(result);

// cách 3 function expresstion - biểu thức hàm 
let calculateRessult= function(a,b){
    return a/b ;
}

calculateRessult(21, 10);

