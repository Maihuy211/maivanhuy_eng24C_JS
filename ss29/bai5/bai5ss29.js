let users = [];
let choice;
do {
    choice = +prompt(`
        1. Đăng ký người dùng mới.
        2. Đăng nhập người dùng.
        3. Thoát.`);
    switch (choice) {
        case 1:
            register();
            break;
        case 2:
            login();
            break;
        case 3:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 3);
function register() {
    let username = prompt("Người dùng nhập tên để đăng ký:");
    let email;
    do {
        email = prompt("Người dùng nhập email để đăng ký:");
        if (!email.includes("@") || !(email.endsWith(".com") || email.endsWith(".vn"))) {
            console.log("Email không hợp lệ.");
        } else {
            break;
        }
    } while (true);  
    let password;
    do {
        password = prompt("Nhập mật khẩu");
        if (isValidPassword(password)) {
            break;
        } else {
            console.log("Mật khẩu không hợp lệ!");
        }
    } while (true);
    let newUser = {
        username: username,
        email: email,
        password: password
    };
    users.push(newUser); 
    console.log("Đăng ký thành công!");
}
function isValidPassword(password) {
    if (password.length < 6){
        return false;
    } 
    let index1 = false;
    let index2 = false;
    let chars = "!@#$%^&*(),.?\":{}|<>";
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            index1 = true;
        }
        if (chars.includes(char)) {
            index2 = true; 
        }
    }
    return index1 && index2;
}
function login() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log(`Đăng nhập thành công`);
    } else {
        console.log("Email hoặc mật khẩu không đúng.");
    }
}