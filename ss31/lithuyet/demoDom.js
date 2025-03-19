// console.log(document);
// let h1 = document.getElementById("demo-id"); //h1
// console.log(h1);
// // getElemntsByClassName()
// let htmlList = document.getElementsByClassName("demo-class"); // [h1 , b , u , div ,...]
// console.log(htmlList) // HTMLCollection == gần giống mảng
// htmlList[0];
// console.log(htmlList[0]);
// for(let i = 0 ; i < htmlList.length; i++){
//     htmlList[i];
//     console.log(htmlList[i]);
// }
// // getELementsByTagName();
// //....
// 
let h1=document.getElementById("demo-id");
// nội dung
console.log(h1.innerHTML); // 
console.log(h1.innerText); // 
console.log(h1.textContent); // 
let div = document.getElementById("inner");
console.log(div.innerHTML); 
console.log(div.innerText); 
console.log(div.textContent);
div.innerText="helo";
div.innerHTML=`
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>`
console.log(div.id)
// style 
// console.log(div.style);
// div.style.backgroundColor="blue";
// div.style.borderRadius="5px";
// div.style.border="1px solid black";
console.log(div.classList)
div.classList.add("class-02");
div.classList.add("demo");
div.classList.remove("demo");
console.log(div.children[0].children[2]);
