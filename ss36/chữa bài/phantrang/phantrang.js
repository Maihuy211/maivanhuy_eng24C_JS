let courses = [
    { id: 1, name: "Nguyễn Văn A", position: "Developer" },
    { id: 2, name: "Trần Thị B", position: "Designer" },
    { id: 3, name: "Phạm Văn C", position: "Project Manager" }
];
localStorage.setItem("employeeList",JSON)
function renderCourses() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    courses.forEach((item, index) => {
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
        </tr>`;
    });
}
let add = document.getElementById("btn");
add.onclick = function () {
    addTask();
};
function addTask() {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    if (name === "" || position === "") {
        alert("Thông tin trống");
    } else {
        courses.push({ 
            id: courses.length + 1, 
            name, 
            position
        });
        save()
        renderCourses();
    }
}

function updateTask(index) {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    if (name !== "" && position !== "") {
        courses[index] = { 
            id: courses[index].id,
            name, 
            position
        };
        save()
        renderCourses();
    } else {
        alert("Thông tin trống");
    }
}
function save() {
    localStorage.setItem('courseslist', JSON.stringify(courses));
}
renderCourses();
let paginationContainer = document.getElementById("pagination")
let totalPages = 4
for(let i = 1 ; i < totalPages ; i++){
    let li = `
    <li class="page-item"><a class="page-link" href="#">${i}</a></li>
    `
    paginationContainer.innerHTML += li;  
}
paginationContainer.innerHTML += `<li class="page-item"><a class="page-link" href="#">Next</a></li>`;  



