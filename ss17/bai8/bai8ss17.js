let date1 = (prompt("nhap (YY:MM:DD)"));
let date2 = (prompt("nhap (YY:MM:DD)"));
const d1 = new Date(date1);
const d2 = new Date(date2);
let total = d2 - d1;
let totalTime = (total)/(1000*60*60*24);
alert(totalTime);