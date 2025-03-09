let arr=[];
let max;
let index;
for(let i = 0 ; i < 10 ; i++){
    arr[i]=+prompt("nhap phan tu: "+(i+1));
    max=arr[0];
    if(max<arr[i]){
        max=arr[i];
        index=i;
    }
}
if(arr.length>0){
    alert(`số lớn nhất: ${max}
    vị trí: ${index}`);
}else{
    alert("ko có số lớn nhất");
}
