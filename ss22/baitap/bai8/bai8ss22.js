let number= [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
document.write(number+ "<br>");
number.sort();
let count=0;
let count2=0;
let min=number[0];
for (let i=0; i<10;i++){
    count2=0;
     for(let j=0;j<10;j++){
        if(number[i]==number[j]){
            count2++;
        }
     }
     if(count<count2){
        count=count2;
        min=number[i];
     }
}
document.write("số phần tử xuất hiện nhiều nhất và nhỏ nhất trong mảng là :"+min);