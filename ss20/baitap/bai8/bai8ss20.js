let number = +prompt("Nhập một số");
let count = 0;
if(Number.isInteger(number)===true&&number>0){
    for (let i = 0; count < number; i++) {  
        if (i < 10) {  
            switch (i) {  
                case 2:  
                case 3:  
                case 5:  
                case 7:  
                    document.write(i + " ");  
                    count++;  
                    break;  
            }  
        } else {  
            if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {  
                document.write(i + " ");  
                count++;  
            }  
        }  
    } 
}else{
    alert("du liêu nhâp vao ko hop le");
}
