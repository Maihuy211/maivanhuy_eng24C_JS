let number=+prompt("nhap 1 so:");
let sum=0;
if(Number.isInteger(number)===true&&number>0){
    for(let i=1;i<=number;i++){
        sum+=i;
    }
    alert(sum);
}else{
    alert("du liêu nhâp vao ko hop le");
} 