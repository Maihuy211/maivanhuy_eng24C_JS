let min = Number(prompt("nhap so thu nhat:"));
let max = Number(prompt("nhap so thu hai:"));
let count = Math.floor(Math.random() * (max - min -2 + 1) + min + 1);
alert(count);