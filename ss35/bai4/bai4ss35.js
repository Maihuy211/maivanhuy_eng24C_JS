// tham khảo ai, đã nghiên cứu note ra xem lại cho dễ hiểu 

let courses = JSON.parse(localStorage.getItem('courseslist')) || [
    { id: 1, name: "Nguyễn Văn A", position: "Developer" },
    { id: 2, name: "Trần Thị B", position: "Designer" },
    { id: 3, name: "Phạm Văn C", position: "Project Manager" },
    { id: 4, name: "Lê Thị D", position: "QA Engineer" },
    { id: 5, name: "Vũ Văn E", position: "DevOps" },
    { id: 6, name: "Hoàng Thị F", position: "HR Manager" }
];
const rowsPerPage = 3; // mỗi trang hiển thị 3 dòng dữ liệu 
let currentPage = 1; // Mặc định hiển thị trang đầu tiên
function renderCourses() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedCourses = courses.slice(start, end);  
    paginatedCourses.forEach((item) => {
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
        </tr>`;
    });
    renderPagination();
}
function renderPagination() {
    let pagination = document.getElementById("pagination");
    pagination.innerHTML = ''; // Xóa nội dung cũ
    let totalPages = Math.ceil(courses.length / rowsPerPage);

    // Nút Previous
    if (currentPage > 1) { // hiển thị nút previous có thể bấm (onclick = "")
        pagination.innerHTML += `<button onclick="changePage(${currentPage - 1})">Previous</button>`;  //  khi bấm sẽ về trang trước 
    } else {
        pagination.innerHTML += `<button disabled>Previous</button>`; // nếu đang ở trang đầu nút dissableb ko sử dụng đc 
    }

    // Các nút số trang
    for (let i = 1; i <= totalPages; i++) { // duyệt từ 1 đến totalpages 
        if (currentPage === i) { 
            pagination.innerHTML += `<button onclick="changePage(${i})" class="active">${i}</button>`; // nếu là trang hiện tại , thêm class "active"
        } else {
            pagination.innerHTML += `<button onclick="changePage(${i})">${i}</button>`; // thêm phần nút bấm vào phần phân trang 
        }
    }

    // Nút Next
    if (currentPage < totalPages) { // hiển thị nút next có thể bấm 
        pagination.innerHTML += `<button onclick="changePage(${currentPage + 1})">Next</button>`; 
    } else {
        pagination.innerHTML += `<button disabled>Next</button>`; // hiển thị nút vô hiệu hoá 
    }
}
function changePage(page) {
    let totalPages = Math.ceil(courses.length / rowsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderCourses();
    }
}
// 
let button = document.getElementById("btn")
button.onclick = function () {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    
    if (name === "" || position === "") {
        alert("Thông tin trống");
        return;
    }
    courses.push({ 
        id: courses.length + 1, 
        name, 
        position
    });
    save();

    currentPage = Math.ceil(courses.length / rowsPerPage); 
    renderCourses();

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
};

function save() {
    localStorage.setItem('courseslist', JSON.stringify(courses));
}

renderCourses();
