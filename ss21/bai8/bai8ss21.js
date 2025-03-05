let number=+prompt("nhap mot so:");
let result;
let sum=0;
let temp=number;
while(number>0){
    result=number%10;
    sum=sum+(result*result*result);
    number=Math.floor(number/10);
}
if(temp===sum){
    alert(temp +" la so armstrong");
}else{
    alert(temp +" khong phai la so armstrong");
}