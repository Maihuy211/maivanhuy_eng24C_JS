let sum=0;
for(let i=0 ; i<5 ; i++ ){
    let number= +prompt("nhap 5 so")
    if(Number.isInteger(number)===true){
        if(number%2!==0){
            sum+=number;
        }
    }
}
alert("tông số lẻ các số vừa nhâp là "+sum)
