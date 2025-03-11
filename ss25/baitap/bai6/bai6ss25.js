let string=prompt("nhập một chuỗi")
function  isPalindrome(){
    let string2 = string.split("").reverse().join("");
    if (string === string2) {
        alert("Chuỗi là đối xứng.");
    } else {
        alert("Chuỗi không phải là đối xứng.");
    }
}
isPalindrome();