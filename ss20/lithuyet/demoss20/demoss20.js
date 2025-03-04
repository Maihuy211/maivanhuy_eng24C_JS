// let result = 49;
// let answer;

// while (answer !== result) {
//   let answer = +prompt("Mời bạn nhập vào số cần đoán");
// }

// console.log("Bingo");
let number=+prompt("nhap 1 so:");
if(Number.isInteger(number)===true&&number>0){
    for(let i=1;i<=number;i++){
        sum+=i;
    }
    alert(sum);
}else{
    alert("du liêu nhâp vao ko hop le");
} 