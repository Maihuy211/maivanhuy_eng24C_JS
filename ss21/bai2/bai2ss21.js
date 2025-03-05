let even=0;
let odd=0;
for(let i=0 ; i<5 ; i++ ){
    let number= +prompt("nhap 5 so")
    if(Number.isInteger(number)===true){
        if(number%2!==0){
            even++;
        }
        if(number%2===0){
            odd++;
        }
    }
}
document.write("tổng các số lẻ: "+even);
document.write("<br>");
document.write("tổng các số chẵn: "+odd);
