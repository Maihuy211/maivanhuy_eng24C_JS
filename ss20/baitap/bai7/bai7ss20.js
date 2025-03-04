let number=+prompt("nhap 1 so:");
let f1=0;
let f2=1;
let fn;
if(Number.isInteger(number)===true&&number>0){
    document.write("0 1 ")
    for(i=2;i<=number;i++){
        fn=f1+f2;
        f1=f2;
        f2=fn;
        document.write(fn+" ")
    }
}else{
    alert("khong hop le")
}