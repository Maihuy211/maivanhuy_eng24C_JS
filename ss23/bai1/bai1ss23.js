let arr=[];
let count=0;
for(let i = 0 ; i < 10 ; i++){
    arr[i]=+prompt("nhap phan tu: "+(i+1));
    if(arr[i]>=10 && Number.isInteger(arr[i])===true ){
        count++;
    }  
}
if(count>0){
    alert(`có ${count} số nguyên lớn hơn 10 hoặc bằng 10`);
}else{
    alert("ko số nào lớn hơn hoặc bằng 10")
}

    
