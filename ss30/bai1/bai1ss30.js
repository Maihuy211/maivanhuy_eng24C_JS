let products=[
    {
        id:1,
        name:"mèn mén",
        price:20000,
        quantity:20,
        category:"món ăn dân tộc Mông",
    },
    {
        id:2,
        name:"mứt",
        price:80000,
        quantity:21,
        category:"món ăn dân tộc Kinh",
    },
    {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category:"món ăn dân tộc Mông",
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price:60000,
        quantity:30,
        category:"món ăn dân tộc Kinh",
    }
]
let cart=[];
let choice;
let choice2;
do{
   choice=+prompt(`
    1. Hiển thị các sản phẩm theo tên danh mục.
    2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
    3. Sắp xếp các sản phẩm trong cửa hàng theo giá.
    4. Tính số tiền thanh toán trong giỏ hàng.
    5. Thoát.`)
    switch(choice){
        case 1:
            displayCategory();
            break;
        case 2:
            buyProduct();
            break;
        case 3:
            menuSort();
            break;
        case 4:
            break
        case 5:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Không hợp lệ")
    }
}while(choice!==5);
function displayCategory() {
    let search=prompt("Nhập danh mục sản phẩm:")
    let product=products.filter(items => items.category.includes(search));
    if(product.length === 0){
        console.log(`Không có danh mục ${search}`);
    }else{
        product.forEach(function(items){
            console.table(items);
        })
    }
}
function menuSort() {
    do {
        choice2=prompt(`
            a. Tăng dần.
            b. Giảm dần.
            c. Thoát`);
            switch(choice2){
                case 'a':
                    sortPriceProductIncease();
                    break;
                case 'b':
                    sortPriceProductDecrese();
                    break;
                case 'c':
                    calculateTotal();
                    break;
                default:
                    console.log("Không hợp lệ")
            }
    }while(choice2==='a'||choice2==='b');
}
function sortPriceProductIncease() {
   products.sort(function (a, b){
        return a.price - b.price;
    }); 
    console.log("Sản phẩm của cửa hàng theo giá tăng dần");
    displayProduct();
}
function sortPriceProductDecrese() {
    products.sort(function (a, b){
        return b.price - a.price ;
    });
    console.log("Sản phẩm của cửa hàng theo giá giảm dần");
    displayProduct();
}
function displayProduct() {
    products.forEach(function(items){
        console.table(items);
    })
}
function buyProduct() {
    let idProduct=+prompt("Mời bạn nhập id sản phẩm");
    let result = products.find(items => items.id===idProduct);                                                           
    if(!result){
        console.log("Không tìm thấy sản phẩm");
    }else{
        let cartBuy= +prompt("Nhập vào số lượng sản phẩm bạn muốn mua");
        if(result.quantity < cart || result.quantity === 0 ){
            console.log("Số lượng sản phẩm trong kho không đủ");
        }else{
            console.log("Mua thành công");
            result.quantity-=cartBuy;
            let cartItem = cart.find(item => item.id === idProduct);
            if (cartItem) {
                cartItem.quantity += cartBuy;
            } else {
                cart.push(
                { 
                    id: result.id, 
                    name: result.name, 
                    price: result.price, 
                    quantity: cartBuy 
                });
            }
            console.log("Giỏ hàng hiện tại:");
            console.table(cart);
        }
    }
}        
function calculateTotal() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng số tiền thanh toán: ${total}`);
}1