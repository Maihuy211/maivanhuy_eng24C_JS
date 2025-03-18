let phones = [
    {
        id: 1,
        name: "iPhone 13",
        price: 20000000,
        quantity: 10,
        company: "Apple",
    },
    {
        id: 2,
        name: "Samsung Galaxy S22",
        price: 18000000,
        quantity: 5,
        company: "Samsung",
    },
    {
        id: 3,
        name: "Xiaomi Mi 11",
        price: 15000000,
        quantity: 8,
        company: "Xiaomi",
    },
    {
        id: 4,
        name: "Google Pixel 6",
        price: 17000000,
        quantity: 12,
        company: "Google",
    }
];
let cart = [];
let choice;
let choice2;
do {
    choice = +prompt(`
        1. Hiển thị danh sách điện thoại theo hãng.
        2. Thêm điện thoại mới vào cửa hàng.
        3. Tìm kiếm điện thoại theo tên hoặc id.
        4. Mua điện thoại.
        5. Thanh toán tất cả điện thoại trong giỏ hàng.
        6. Sắp xếp điện thoại theo giá.
        7. Hiển thị tổng số tiền của các điện thoại trong kho.
        8. Hiển thị tổng số lượng điện thoại theo từng hãng.
        9. Thoát chương trình.
    `);  
    switch (choice) {
        case 1:
            displayCompany();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            menuSort();
            break;
        case 7:
            calculateTotalPrice();
            break;
        case 8:
            displayTotalByCompany();
            break;
        case 9:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 9);
function displayCompany() {
    let company = prompt("Nhập hãng điện thoại: ");
    let result = phones.filter(item => item.company.includes(company));
    if (result.length === 0) {
        console.log("Không có điện thoại thuộc hãng này");
    } else {
        console.table(result);
    }
}
function addPhone() {
    let count = +prompt("Nhập số lượng điện thoại muốn thêm vào cửa hàng:");
    for (let i = 0; i < count; i++) {
        alert(`Nhập thông tin cho điện thoại thứ ${i + 1}:`);
        let name = prompt("Nhập tên điện thoại:");
        let price = +prompt("Nhập giá điện thoại:");
        let quantity = +prompt("Nhập số lượng:");
        let company = prompt("Nhập hãng điện thoại:");
        let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());
        let newPhone = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            company: company
        };
        phones.push(newPhone);
        console.log("Thêm điện thoại thành công", newPhone);
    }
}
function searchPhone() {
    let key = prompt("Nhập tên hoặc ID điện thoại:");
    let result = phones.find(item => item.name.includes(key) || item.id == key);
    if (result) {
        console.table(result);
    } else {
        console.log("Không tìm thấy điện thoại");
    }
}
function buyPhone() {
    let id = +prompt("Nhập ID điện thoại cần mua:");
    let phone = phones.find(item => item.id === id);
    if (!phone) {
        console.log("Không tìm thấy điện thoại");
        return;
    }
    let quantity = +prompt("Nhập số lượng muốn mua:");
    if (phone.quantity < quantity) {
        console.log("Không đủ hàng trong kho");
    } else {
        phone.quantity -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ 
                id: phone.id, 
                name: phone.name, 
                price: phone.price, 
                quantity 
            });
        }
        console.log("Mua thành công!");
    }
}
function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống, không có gì để thanh toán.");
    } else {
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Thanh toán thành công! Tổng số tiền: ${total}`);
        cart = [];
    }
}
function menuSort() {
    do {
        choice2 = prompt(`
            a. Tăng dần.
            b. Giảm dần.
            c. Thoát`);
        switch (choice2) {
            case 'a':
                sortPricePhoneIncrease();
                break;
            case 'b':
                sortPricePhoneDecrease();
                break;
            case 'c':
                return;
            default:
                console.log("Lựa chọn không hợp lệ");
        }
    } while (choice2 === 'a' || choice2 === 'b');
}
function sortPricePhoneIncrease() {
    phones.sort(function (a, b){
        return a.price - b.price;
    });
    console.log("Sản phẩm của cửa hàng theo giá tăng dần");
    displayProduct();
}
function sortPricePhoneDecrease() {
    phones.sort(function (a, b){
        return b.price - a.price;
    });
    console.log("Sản phẩm của cửa hàng theo giá giảm dần");
    displayProduct();
}
function displayProduct() {
    console.table(phones);
}
function calculateTotalPrice() {
    let total = phones.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng số tiền của các điện thoại trong kho: ${total}`);
}
function displayTotalByCompany() {
    let companyCount = {};
    phones.forEach(item => {
        if (!companyCount[item.company]) {
            companyCount[item.company] = 0;
        }
        companyCount[item.company] += item.quantity;
    });

    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let company in companyCount) {
        console.log(`${company} -  ${companyCount[company]}`);
    }
}
