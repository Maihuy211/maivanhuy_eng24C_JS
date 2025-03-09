let arr=[];
let n=+prompt("nhap so luong phan tu:");
let count=0;
if(n>0){
    for(let i = 0 ; i < n ; i++){
        arr[i]=+prompt("nhap phan tu: "+(i+1));
        if(arr[i]<0){
            count++;
        }  
    }
    alert(count);
}else if(n===0){
    alert("mảng ko có phần tử")
}else{
    alert("số lượng phần tử ko hợp lệ ")
}
