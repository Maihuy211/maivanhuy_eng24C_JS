let btnLike1 = document.getElementById("likeButton-1");
let btnLike2 = document.getElementById("likeButton-2");
let btnLike3 = document.getElementById("likeButton-3");

let count_1 = document.getElementById("count-1");
let count_2 = document.getElementById("count-2");
let count_3 = document.getElementById("count-3");

let count1 = parseInt(localStorage.getItem("count1")) || 0;
let count2 = parseInt(localStorage.getItem("count2")) || 0;
let count3 = parseInt(localStorage.getItem("count3")) || 0;

count_1.textContent = count1;
count_2.textContent = count2;
count_3.textContent = count3;

btnLike1.onclick = function () {
    count1++;
    count_1.textContent = count1 ;
    localStorage.setItem("count1",count1);
}
btnLike2.onclick = function () {
    count2++;
    count_2.textContent = count2 ;
    localStorage.setItem("count2",count2);
}
btnLike3.onclick = function () {
    count3++;
    count_3.textContent = count3 ;
    localStorage.setItem("count3",count3);
}


