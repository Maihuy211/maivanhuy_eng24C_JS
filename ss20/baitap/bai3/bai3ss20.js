let number = Number(prompt("nhap mot so:"));
if(Number.isInteger(number)==true){
    number = number.toLocaleString();
    for(let i=0 ; i< number.length; i++){
        if(number[i]===number[number.length-i-1]){
            alert("Đây là số đối xứng");
            break;
        }else{
            alert("Đây ko là số đối xứng")
        }
    }
}