let choice;
let number = [];
let count = 0;
do{
    choice = +prompt(`  
        1. Nhập danh sách số nguyên
        2. Tính trung bình các số
        3. Tìm số chẵn lớn nhất
        4. Tìm số lẻ lớn nhất
        5. Thoát`);
    switch(choice){
        case 1:
            intege();
            break;
        case 2:
            trungbinh()
            break;
        case 3:
            let even = number.filter(function(element) {
                return element%2===0;
            });
            if (even.length === 0) {
                console.log("Không có số chẵn trong mảng");
            } else {
                let max=Math.max(...even);
                console.log("số lớn chẵn lớn nhất là: "+max)
            }
            break;
        case 4:
            let odd = number.filter(function(element) {
                return element%2!==0;
            });
            if (odd.length === 0) {
                console.log("Không có số lẻ trong mảng");
            } else {
                let max2=Math.max(...odd);
                console.log("số lớn lẻ lớn nhất là: "+max2)
            }
            break;
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
}while(choice!==5);
function intege (){
    let n = +prompt("Nhập số lượng số nguyên: ");
    for(i =0;i<n;i++){
        number[i] = +prompt("Nhập số nguyên thứ "+(i+1));
        if(Number.isInteger(number[i])==true){
            count += number[i];
        }
    }
    console.log(number);
}
function trungbinh(){
    let result = 0;
    result = count/3
    console.log("Trung bình các số là: "+result);
}