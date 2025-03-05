let tien_ban_dau=+prompt("so tien gui ngan hang ban dau la: ");
let lai_xuat=+prompt("lai xuat thang: ");
lai_xuat=lai_xuat/100;
let so_thang_gui=+prompt("so thang gui: ");
let tien_nhan = tien_ban_dau;
let tong_tien_lai = 0; 
for (let i = 1; i <= so_thang_gui; i++) {
    let tien_lai = tien_nhan * lai_xuat; 
    tien_nhan += tien_lai; 
    tong_tien_lai += tien_lai; 
}
document.write("so tien lai la: "+(tong_tien_lai).toFixed(3)+"<br>");
document.write("so tien nhan duoc la: "+tien_nhan);