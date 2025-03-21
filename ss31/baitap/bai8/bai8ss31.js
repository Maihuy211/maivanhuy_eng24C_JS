let toDoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    }
];
const ul = document.getElementById("myUL");
function renderTodo(){
    let listTodo = document.getElementById("myUL");
    listTodo.innerHTML="";
    toDoList.forEach(function(item){
        if(item.completed === false){
            listTodo.innerHTML += `<li>${item.task}<span class="close">×</span></li>`
        }else{
            listTodo.innerHTML += `<li class="checked">${item.task}<span class="close">×</span></li>`
        }
    });
}
let add  = document.getElementById("addBtn");
add.onclick = function(){
    addTodo();
}
//b1:gán sự kiện onclick cho nút thêm mới tren giao diện
function addTodo(){
    //b2:Lựa chọn phần tử input
    let input = document.getElementById("myInput").value;
//b3:Tạo 1 đối tượng task mới từ giá trị của phần tử input
//{
    //id:id của phần tử cuối cùng +1
    //task:giá trị của ô input
    //complete:false
//}
let id = toDoList[toDoList.length - 1].id+1;
let todo = {
    id: id,
    task: input,
    completed:false,
};
//b4:Thêm task mới vào mảng todolist ban đầu 
//b5:Gọi hàm rendertodo để hiển thị lại bao gồm cả hàm đã thêm
toDoList.push(todo);
renderTodo();
}
renderTodo();
