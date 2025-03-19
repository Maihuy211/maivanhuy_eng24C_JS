const username = document.getElementById("username");
const password = document.getElementById("password");
let button = document.getElementById("btn-login")
button.onclick = function() {
    if (username.value === "huanrose@gmail.com" && password.value === "123456") {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}