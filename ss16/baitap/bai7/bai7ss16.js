let math = Number(prompt("Nhập điểm toán:"));
let physics = Number(prompt("Nhập điểm vật lý:"));
let chemistry = Number(prompt("Nhập điểm hóa:"));
let resul = ((math+physics+chemistry)/3).toFixed(2);
document.write(resul);