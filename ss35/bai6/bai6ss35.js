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

let statusFilter = document.getElementById("status");
let tableBody = document.getElementById("tableBody");
let addButton = document.getElementById("btn-addCategory");
let addCategoryButton = document.getElementById("buttonAdd");
let closeButton = document.getElementById("close");
let cancelButton = document.getElementById("buttonCancel");
let formContainer = document.getElementById("bodyAdd");

function renderList() {
    tableBody.innerHTML = "";
    let selectedStatus = statusFilter.value;
    let filterList = [];
    for (let i = 0; i < list.length; i++) {
        if (selectedStatus === "all") {
            filteredList.push(list[i]); 
        } else if (selectedStatus === "on") {
            if (list[i].status === "Đang hoạt động") {
                filterList.push(list[i]);
            }
        } else if (selectedStatus === "off") {
            if (list[i].status === "Ngừng hoạt động") {
                filterList.push(list[i]);
            }
        }
    }
    for (let i = 0; i < filterList.length; i++) {
        let statusClass = "";
        if (filterList[i].status === "Đang hoạt động") {
            statusClass = "active";
        } else {
            statusClass = "inactive";
        }
        let row = `
        <tr>
            <td>${filterList[i].id}</td>
            <td>${filterList[i].content}</td>
            <td><span class="status ${statusClass}">${filterList[i].status}</span></td>
            <td>
                <i class="fa-solid fa-pencil"></i>
                <i class="fa-solid fa-trash-can"></i>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    }
}
statusFilter.addEventListener("change", function () {
    renderList();
});

addButton.onclick = function () {
    document.getElementById("nameCate").value = "";
    document.getElementById("nameCates").value = "";
    formContainer.style.display = "block";
};
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
    if (selectedRadio) {
        if (selectedRadio.value === "active") {
            status = "Đang hoạt động";
        }
    }
    list.push({
        id: idInput,
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
renderList();
