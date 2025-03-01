let a=+prompt("moi ban nhap vao so a");
let b=+prompt("moi ban nhap vao so b");
let operator=prompt("moi ban nhap cac phep tinh (+,-,/,*)");
switch(operator){
    case "+":
        let resul= a + b ;
        alert("ket qua cua phep tinh tren la: "+resul);
        break;
    case "-":
        resul= a - b ;
        alert("ket qua cua phep tinh tren la: "+resul);
        break;
    case "/":
        resul = a / b ;
        alert("ket qua cua phep tinh tren la: "+resul);
        break;
    case "*":
        resul = a * b ;
        alert("ket qua cua phep tinh tren la: "+resul);
        break;
    default:
        alert("Nâu !!!!!!!!");
}