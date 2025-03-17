let employee = [];
let choice;
do {
    choice = +prompt(`
        1. Thêm nhân viên mới.
        2. Xóa nhân viên theo id.
        3. Cập nhật mức lương của nhân viên theo id.
        4. Tìm kiếm nhân viên theo tên.
        5. Thoát  
    `);
    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            findUserByName();
            break;
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Không hợp lệ");
    }
} while (choice !== 5);
function addEmployee() {
    let count = +prompt("Nhập số lượng nhân viên muốn thêm:");
    for (let i = 0; i < count; i++) {
        console.log(`Nhập thông tin nhân viên thứ ${i + 1}:`);
        let name = prompt("Nhập tên nhân viên:");
        let position = prompt("Nhập vị trí:");
        let salary = +prompt("Nhập mức lương:");
        let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());
        let newEmployee = {
            id: id,
            name: name,
            position: position,
            salary: salary
        };
        employee.push(newEmployee);
        console.log("Thêm nhân viên thành công", newEmployee);
    }
}
function deleteProduct() {
    let id = +prompt("Nhập ID của sản phẩm cần xóa:");
    let findIndex = product.findIndex(item => item.id === id);
    if (findIndex !== -1) {
        let confirmDelete = confirm(`Bạn có chắc chắn muốn xoá sản phẩm ${product[findIndex].name} không?`);
        if (confirmDelete) {
            product.splice(findIndex, 1);
            console.log("Xóa sản phẩm thành công!");
        } else {
            console.log("Hủy xoá sản phẩm.");
        }
    } else {
        console.log("Không tìm thấy sản phẩm có ID:", id);
    }
}
function updateSalary() {
    let id = +prompt("Nhập ID nhân viên muốn cập nhật lương:");
    let findIndex = employee.findIndex(item => item.id === id);
    if (findIndex !== -1) {
        let newSalary = +prompt("Mời bạn nhập mức lương muốn cập nhật:");
        employee[findIndex].salary = newSalary;
        console.log("Cập nhật lương thành công!", employee[findIndex]);
    } else {
        console.log("Không tìm thấy nhân viên có ID:", id);
    }
}
function findUserByName() {
    let nameUser = prompt("Mời bạn nhập tên nhân viên muốn tìm kiếm:");
    let result = employee.filter(item => item.name.includes(nameUser));
    if (result.length === 0) {
        console.log("Không có nhân viên nào có tên như vậy!");
    } else {
        console.log("Danh sách nhân viên tìm được:", result);
    }
}
