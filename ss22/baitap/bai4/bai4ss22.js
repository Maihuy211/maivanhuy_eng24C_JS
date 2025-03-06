let number = prompt("Nhập một dãy số: ");
let num = +number;
if (Number.isInteger(num)) { 
    let array = number.split("");
    let max=array[0];
    for(let i=0 ; i< number ; i++){
        if(max<array[i]){
            max=array[i];
        }
    }
    alert(max+" là số lớn nhất trong mảng");
} else {
    alert("Không hợp lệ");
}