let list = JSON.parse(localStorage.getItem("categoryList")) || [
    { id: "DM001", content: "Quần áo", status: "Đang hoạt động" },
    { id: "DM002", content: "Kính mắt", status: "Ngừng hoạt động" },
    { id: "DM003", content: "Giày dép", status: "Đang hoạt động" },
    { id: "DM004", content: "Thời trang nam", status: "Ngừng hoạt động" },
    { id: "DM005", content: "Thời trang nữ", status: "Ngừng hoạt động" },
    { id: "DM006", content: "Hoa quả", status: "Ngừng hoạt động" },
    { id: "DM007", content: "Rau", status: "Đang hoạt động" },
    { id: "DM008", content: "Điện thoại", status: "Ngừng hoạt động" }
];
function renderList() {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    list.forEach((item, index) => {
        let statusClass = "";
        if (item.status === "Đang hoạt động") {
            statusClass = "active";
        } else {
            statusClass = "inactive";
        }
        table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.content}</td>
            <td><span class="status ${statusClass}">${item.status}</span></td>
            <td>
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-trash-can"></i>
            </td>
        </tr>`;
    });
}
renderList();
let addButton = document.getElementById("btn-addCategory");
addButton.onclick = function () {
    document.getElementById("nameCate").value = "";
    document.getElementById("nameCates").value = "";
    formContainer.style.display = "block";
    addCategoryButton.onclick = addTask; 
};
let addCategoryButton = document.getElementById("buttonAdd");
let closeButton = document.getElementById("close");
let cancelButton = document.getElementById("buttonCancel");
let formContainer = document.getElementById("bodyAdd");

closeButton.onclick = function () {
    formContainer.style.display = "none";
};
cancelButton.onclick = function () {
    formContainer.style.display = "none";
};

function addTask() {
    let idInput = document.getElementById("nameCate").value;
    let content = document.getElementById("nameCates").value;
    let idError = document.getElementById("idError");
    let nameError = document.getElementById("nameError");
  
    let isValid = true;
    if (idInput === "") {
        idError.style.display = "block"; 
        isValid = false;
    } else {
        idError.style.display = "none";
    }

    if (content === "") {
        nameError.style.display = "block"; 
        isValid = false;
    } else {
        nameError.style.display = "none";
    }
    if (!isValid) return;
    let status = "Ngừng hoạt động"; 
    let selectedRadio = document.querySelector('input[name="status"]:checked');
    if (selectedRadio && selectedRadio.value === "active") {
        status = "Đang hoạt động";
    }
    list.push({ id: 
        idInput, 
        content: content, 
        status: status 
    });
    saveToLocalStorage();
    renderList();
    formContainer.style.display = "none";
}
addCategoryButton.onclick = addTask;
function saveToLocalStorage() {
    localStorage.setItem("categoryList", JSON.stringify(list));
}

