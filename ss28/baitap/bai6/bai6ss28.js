const cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];
let sum=0;
for(let index in cart){
    sum+=cart[index].price*cart[index].quantity;
}
console.log(sum)