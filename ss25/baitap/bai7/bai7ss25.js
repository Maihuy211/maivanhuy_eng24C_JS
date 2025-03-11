let string=prompt("nhập một chuỗi")
function  isUpperFirst(){
    string=string.toLowerCase();
    string=string.trim();
    let space=string.split(" ");
    for (let i=0; i<space.length ; i++) {
        space[i]=space[i].charAt(0).toUpperCase() + space[i].slice(1);
    }
    string=space.join(' ');
    alert(string);
}
isUpperFirst();