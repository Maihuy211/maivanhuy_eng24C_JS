let arr=[];
let n=+prompt("nhap so luong phan tu:");
let count = true;;
if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i]=+prompt("nhap phan tu: "+(i+1));
    }
    for (let i = 2; i < n; i++){ 
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            count= false;
            break;
        }
    }
    if(count===true){
        alert("là dãy số fibonacci");
    }else{
        alert("không phải là dãy số fibonacci");
    }
}else if(n===0){
    alert("không phải là dãy số fibonacci")
}else{
    alert("số lượng phần tử không được nhỏ hơn 0 ")
}
