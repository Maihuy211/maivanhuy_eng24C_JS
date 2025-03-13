let choice;
const pi = 3.1416;
do{
    choice = +prompt(`  
        1. Tính diện tích tròn
        2. Tính chu vi tròn
        3. Tính diện tích hình chữ nhật
        4. Tính chu vi hình chữ nhật
        5. Thoát`);
    switch(choice){
        case 1:
            s_tron();
            break;
        case 2:
            p_tron();
            break;
        case 3:
            s_chu_nhat();
            break;
        case 4:
            p_chu_nhat();
            break;
        case 5:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
}while(choice!==5);
    function s_tron(){
        let r = +prompt("Nhập bán kính: ");
        dien_tich = pi*(r*2);
        console.log(dien_tich);
    }
function p_tron(){
    let r = +prompt("Nhập bán kính: ");
    chu_vi = 2*pi*r;
    console.log(chu_vi);
}
    function s_chu_nhat(){
        let l = +prompt("Nhập chiều dài: ");
        let w = +prompt("Nhập chiều rộng: ");
        dien_tich_chu_nhat = l*w
        console.log(dien_tich_chu_nhat);
}
function p_chu_nhat() {
    let l = +prompt("Nhập chiều dài: ");
    let w = +prompt("Nhập chiều rộng: ");
    chu_vi_chu_nhat = (l+w)*2
    console.log(chu_vi_chu_nhat);
}