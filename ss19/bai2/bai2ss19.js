let str= prompt("nhap mot chuoi ki tu:");
if(str.length===1){
    if( str>='a' && str<='z' || str>='A' && str<='Z' ){
        alert("ki tu "+str+" là chữ cái");
    }else{
        alert("ki tu "+str+" ko phai là chữ cái");
    }
}else{
    alert("ki tu "+str+" ko phai là chữ cái");
}