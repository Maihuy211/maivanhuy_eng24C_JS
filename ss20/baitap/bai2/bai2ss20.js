let number=+prompt("nhap 1 so:");
if(Number.isInteger(number)===true&&number>0){
    document.write("các số chia hết cho 5 từ 1 đến "+number+" : ");
    for(i=1 ; i<=number ; i++){
        if(i%5===0){
            document.write(i+", ");
        }
    }
}else{
    alert("du liêu nhâp vao ko hop le");
}