let background = document.getElementById("background");
let crocodile = document.getElementById("crocodile");
let rabbit = document.getElementById("rabbit");
let snake = document.getElementById("snake");

document.onclick = function (event) {
    let target = event.target;  // là phần tử mà người dùng đã nhấp vào, trong trường hợp sự kiện click . 
//Nó có thể là phần tử gốc hoặc bất kỳ phần tử con nào của nó tùy thuộc vào nơi người dùng nhấp vào chính xác.
    if (target === crocodile) {
        rabbit.style.display = "none";
        snake.style.display = "none";
        crocodile.style.width = "700px";
        crocodile.style.height = "700px";
        background.style.backgroundColor = "#484848";
    } else if (target === rabbit) {
        crocodile.style.display = "none";
        snake.style.display = "none";
        rabbit.style.width = "700px";
        rabbit.style.height = "700px";
        background.style.backgroundColor = "#484848";
    } else if (target === snake) {
        rabbit.style.display = "none";
        crocodile.style.display = "none";
        snake.style.width = "700px";
        snake.style.height = "700px";
        background.style.backgroundColor = "#484848";
    } else if (target === background) {
        crocodile.style.display = "block";
        rabbit.style.display = "block";
        snake.style.display = "block";

        crocodile.style.width = "200px";
        rabbit.style.width = "200px";
        snake.style.width = "200px";

        crocodile.style.height = "200px";
        rabbit.style.height = "200px";
        snake.style.height = "200px";

        background.style.backgroundColor = "white";
    }
};