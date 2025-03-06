let number=[2,5,7,4,1,6,8,2,5,7];
document.write(number+"<br>");
for(let i=0 ; i< 10 ; i++){
    for(let j =0 ; j< 10 - 1 - i ; j++){
        if(number[j+1]<number[j]){
            let temp = number[j];
            number[j]=number[j+1];
            number[j+1]=temp;
        }
    }
}
document.write(number);