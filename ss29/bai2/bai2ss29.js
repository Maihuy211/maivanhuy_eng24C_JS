let choice;
let product = [];

do {
    choice = +prompt(`
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo ID.
        4. Cập nhật thông tin sản phẩm theo ID.
        5. Xóa sản phẩm theo ID.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát.
    `);

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayProduct();
            break;
        case 3:
            displayIdProduct();
            break;
        case 4:
            updateProduct();
            break;
        case 5:
            deleteProduct();
            break;
        case 6:
            searchPriceProduct();
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
    }
} while (choice !== 7);
function addProduct() {
    let count = +prompt("Nhập số lượng sản phẩm:");
    for (let i = 0; i < count; i++) {
        alert(`Nhập thông tin cho sản phẩm thứ ${i + 1}:`);
        let name = prompt("Nhập tên sản phẩm:");
        let price = +prompt("Nhập giá sản phẩm:");
        let category = prompt("Nhập danh mục sản phẩm:");
        let quantity = +prompt("Nhập số lượng sản phẩm trong kho:");
        let id = Math.floor(Math.random() * 1000);
        
        let newProduct = { id, name, price, category, quantity };
        product.push(newProduct);
        console.log("Thêm sản phẩm thành công", newProduct);
    }
}
function displayProduct() {
    if (product.length === 0) {
        console.log("Danh sách sản phẩm trống!");
    } else {
        product.forEach((element, index) => {
            console.log(`Sản phẩm ${index + 1}`);
            console.log("ID:", element.id);
            console.log("Name:", element.name);
            console.log("Price:", element.price);
            console.log("Category:", element.category);
            console.log("Quantity:", element.quantity);
            console.log("-------------------------");
        });
    }
}
function displayIdProduct() {
    let search = +prompt("Nhập ID của sản phẩm cần hiển thị chi tiết: ");
    let result = product.find(element => element.id === search);
    
    if (!result) {
        console.log("Không tìm thấy sản phẩm");
    } else {
        console.log("Chi tiết sản phẩm:");
        console.log("ID:", result.id);
        console.log("Name:", result.name);
        console.log("Price:", result.price);
        console.log("Category:", result.category);
        console.log("Quantity:", result.quantity);
    }
}
function updateProduct() {
        let id = +prompt("Nhập ID của sản phẩm cần được cập nhật:");
        let findIndex = product.findIndex(product => product.id === id);
        if (findIndex !== -1) {
            let newName = prompt("Mời bạn nhập tên sản phẩm cập nhật:");
            product[findIndex].name = newName;
            let newPrice = +prompt("Mời bạn nhập giá :");
            product[findIndex].price = newPrice;
            let newCategory= prompt("Mời bạn nhập danh mục ");
            product[findIndex].category = newCategory;
            let newQuantity = +prompt("Mời bạn nhập số lượng sản phẩm trong kho :");
            product[findIndex].quantity= newQuantity;
            console.log("Cập nhật sản phẩm thành công!", product[findIndex]);
        } else {
            console.log("Không tìm sản phẩm tượng có ID:", id);
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
function searchPriceProduct() {
    let min = +prompt("Nhập giá thấp nhất:");
    let max = +prompt("Nhập giá cao nhất:");
    let result = product.filter(items => items.price >= min && items.price <= max);   
    if(result.length === 0) {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
    }else{
        result.forEach((element, index) => {
            console.log(`Sản phẩm ${index + 1}`);
            console.log("ID:", element.id);
            console.log("Name:", element.name);
            console.log("Price:", element.price);
            console.log("Category:", element.category);
            console.log("Quantity:", element.quantity);
            console.log("-------------------------");
        });
    }
}
