let arr = [];
let n =+prompt("Nhập số lượng phần tử")
if(n>=10&&n<=20){
    for (let i = 0; i < n; i++) {
        let number = prompt(`Nhập số thứ ${i + 1}: `);
        if (!isNaN(number) && number .trim() !== "") {
            arr.push(parseInt(number));
        }
    }
    if (arr.length === 0) {
        console.log("Mảng không có phần tử nào");
    }else if(!Array.isArray(arr)){
        console.log("Dữ liệu không hợp lệ");
    }else{
        let evenSum = arr
            .filter(num => num % 2 === 0)  
            .reduce((sum, num) => sum + num, 0); 
        let oddSum = arr
            .filter(num => num % 2 !== 0)  
            .reduce((sum, num) => sum + num, 0); 

        console.log("totalEven = ", evenSum);
        console.log("totalOdd = ", oddSum);
    }
}else{
    console.log("Dữ liệu không hợp lệ")
}
