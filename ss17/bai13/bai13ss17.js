let cash = Number(prompt("so tien gui"));
let month = Number(prompt("so thang gui"));
let total = Math.abs(cash*(0.043/12)*month);
document.write("so tien lai la: "+total);