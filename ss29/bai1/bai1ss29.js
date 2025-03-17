let choice;
let contact=[];
do{
    choice=+prompt(`
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6. Thoát.`);
    switch(choice){
        case 1:
            addContact();
            break;
        case 2:
            displayContact()
            break;
        case 3:
            searchContact()
            break;
        case 4:
            updateContact()
            break;
        case 5:
            deleteContact()
            break;
        case 6:
            console.log("Thoát chương trình")
            break;
        default:
            console.log("Không hợp lệ")
    }
}while(choice!==6);
function addContact(){
    let count = +prompt("Nhập số lượng đối tượng Contact vào danh sách liên hệ:");
    for (let i = 0; i < count; i++) {
        alert(`Nhập thông tin cho sách thứ ${i + 1}:`);
        let name = prompt("Nhập tên đối tượng:");
        let email = prompt("Email của người liên hệ:");
        let phone = prompt("Số điện thoại của người liên hệ:");
        let id = Math.floor(Math.random() * 9999943 + new Date().getMilliseconds());
        let newContact = {
            id: id,
            name: name,
            email: email,
            phone: phone
        };
        contact.push(newContact);
        console.log("Thêm đối tượng thành công",newContact);
    }
}
function displayContact() {
    if (contact.length === 0) {
        console.log("Danh sách!");
    } else {
        contact.forEach(function(element,index) {
            console.log(`đối tượng ${index+1}`)
            console.log("ID: ",element.id);
            console.log("Name: ",element.name);
            console.log("Email: ",element.email);
            console.log("Phone: ",element.phone);
            console.log("-------------------------");
        })
    }
}
function searchContact() {
    let search = prompt("Nhập số điện thoại của đối tượng cần tìm: ");
    let result = contact.filter(function(element){
        return element.phone.includes(search);
    });
    if (result.length === 0) {
        console.log("Không tìm thấy đối tượng nào có tiêu đề này!");
    } else {
        result.forEach(function(element,index) {
            console.log(`đối tượng ${index+1}`)
            console.log("ID: ",element.id);
            console.log("Name: ",element.name);
            console.log("Email: ",element.email);
            console.log("Phone: ",element.phone);
            console.log("-------------------------");
        })
        
    }
}
function updateContact() {
    let id = +prompt("Nhập ID của đối tượng cần được cập nhật:");
    let findIndex = contact.findIndex(contact => contact.id === id);
    if (findIndex !== -1) {
        let newName = prompt("Mời bạn nhập tên đối tượng cập nhật:");
        contact[findIndex].name = newName;
        let newEmail = prompt("Mời bạn nhập email đối tượng cập nhật:");
        contact[findIndex].email = newEmail;
        let newPhone = prompt("Mời bạn nhập số điện thoại đối tượng cập nhật:");
        contact[findIndex].phone = newPhone;
        console.log("Cập nhật đối tượng thành công!", contact[findIndex]);
    } else {
        console.log("Không tìm thấy đối tượng có ID:", id);
    }
}
function deleteContact() {
    let id = +prompt("Nhập ID của đối tượng cần xóa:");
    let findIndex = contact.findIndex(contact => contact.id === id);
    if (findIndex !== -1) {
        let deletedContact = contact[findIndex]; 
        contact.splice(findIndex, 1);
        console.log("Xoá đối tượng thành công", deletedContact);
    } else {
        console.log("Không tìm thấy đối tượng có ID:", id);
    }     
}
