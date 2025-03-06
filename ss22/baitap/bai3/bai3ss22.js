let number = prompt("Nhập một dãy số: ");
let num = +number;
if (Number.isInteger(num)) { 
    let array = number.split("")
    array.reverse(); 
    let array2 = array.join(""); 
    alert(array2); 
} else {
    alert("Không hợp lệ");
}