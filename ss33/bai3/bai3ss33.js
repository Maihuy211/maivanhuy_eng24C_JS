    let dish = [
        {name: "Rau sạch", category: "Đồ ăn" },
        { name: "Thịt lợn", category: "Đồ ăn"},
        {name: "Pepsi không calo", category: "Nước" },
        {name: "Cocacola", category: "Nước"},
        { name: "Cờ lê", category: "Dụng cụ"},
        { name: "Tuy vit", category: "Dụng cụ"},
    ];
    function renderTodo(){
        let dishs = document.getElementById("product");
            dishs.innerHTML="";
            dish.forEach(function(item){
                dishs.innerHTML += `<li><b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category} </li>`
            });    
    }
    renderTodo();
    let button = document.getElementById("btn")
    button.onclick = function(){
        filterTodo();
    }
    function filterTodo() {
        let categorys = document.getElementById("category").value;
        let dishss = dish.filter((element)=> element.category === categorys);   
        let dishs = document.getElementById("product");
        dishs.innerHTML="";
        dishss.forEach(function(item){
            dishs.innerHTML += `<li><b>Tên đồ ăn:</b> ${item.name} - <b>Danh mục:</b> ${item.category} </li>`
        });    
    }
renderTodo();