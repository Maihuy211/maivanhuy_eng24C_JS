let number = +prompt("Nhập 1 số từ (0 - 999):");
if (number < 0 || number > 999) {
    alert("Số không hợp lệ!");
} else {
    if (number === 0) {
        alert("Không");
    } else {
        let tram = Math.floor(number / 100);
        let chuc = Math.floor((number % 100) / 10);
        let don_vi = number % 10;
        let result = " ";
        if (tram > 0) {
            if (tram === 1) {
                result += "một trăm ";
            } else if (tram === 2) {
                result += "hai trăm ";
            } else if (tram === 3) {
                result += "ba trăm ";
            } else if (tram === 4) {
                result += "bốn trăm ";
            } else if (tram === 5) {
                result += "năm trăm ";
            } else if (tram === 6) {
                result += "sáu trăm ";
            } else if (tram === 7) {
                result += "bảy trăm ";
            } else if (tram === 8) {
                result += "tám trăm ";
            } else if (tram === 9) {
                result += "chín trăm ";
            }
        }
        if (chuc > 0) {
            if (chuc === 1) {
                result += "mười ";
            } else if (chuc === 2) {
                result += "hai mươi ";
            } else if (chuc === 3) {
                result += "ba mươi ";
            } else if (chuc === 4) {
                result += "bốn mươi ";
            } else if (chuc === 5) {
                result += "năm mươi ";
            } else if (chuc === 6) {
                result += "sáu mươi ";
            } else if (chuc === 7) {
                result += "bảy mươi ";
            } else if (chuc === 8) {
                result += "tám mươi ";
            } else if (chuc === 9) {
                result += "chín mươi ";
            }
        } else if (tram > 0 && don_vi > 0) {
            result += "linh ";
        }
        if (don_vi > 0) {
            if (don_vi === 1) {
                result += "một ";
            } else if (don_vi === 2) {
                result += "hai ";
            } else if (don_vi === 3) {
                result += "ba ";
            } else if (don_vi === 4) { 
                result += "bốn ";
            } else if (don_vi === 5) {
                if (chuc > 0) {
                    result += "lăm";
                } else {
                    result += "năm ";
                }
            } else if (don_vi === 6) {
                result += "sáu ";
            } else if (don_vi === 7) {
                result += "bảy ";
            } else if (don_vi === 8) {
                result += "tám ";
            } else if (don_vi === 9) {
                result += "chín ";
            }
        }
        alert(result.trim());
    }
}