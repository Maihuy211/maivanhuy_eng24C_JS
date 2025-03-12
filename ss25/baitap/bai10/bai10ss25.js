let products= [ 
    ["mì tôm", 5, 5000], 
    ["bánh mì", 12, 15000], 
    ["bánh bao", 5, 8000], 
    ["mèn mén", 30, 20000]
]
let cart=[];
// b1:tạo ra menu
let input
do{
    let menu=`
    ----------menu---------
    1. Danh sách sản phẩm
    2. Mua hàng
    3. Tính tiền + hoá đơn
    4. Thoát
    mời bạn nhập vào sự lựa chọn của bạn:
    -----------------------
    `;
    input=+prompt(menu);
    switch(input){
        case 1:
            displayProduce(products);
            break;
        case 2:
            // B3: Cho người dùng nhập vào tên sản phẩm muốn mua
            let productsName=prompt("Mời bạn nhập tên sản phẩm")
            // B4: Tìm kiếm xem sản phẩm có tồn tại trong cửa hàng hay không
            let flag=-1; 
            for( let i = 0 ; i < 4 ; i++){
                if(productsName===products[i][0]){
                    flag=i;
                    break;
                }
            }                                                                          
            if(flag===-1){
                console.log("Không tìm thấy sản phẩm");
            }else{
                console.log(products[flag]);
                // B5: Nếu không --> Hiển thị sản phẩm 0 tồn tại
                // B6: Nếu có --> Tiến hành cho người dùng nhập vào số lượng muốn mua
                // B7: Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng (cart)
                let inCartIndex=-1;
                for ( let i = 0 ; i < cart ; i ++ ){
                    if(cart[i][0]===productsName){
                        inCartIndex=i;
                    }
                }
                if(inCartIndex===-1){
                    // B8: Nếu chưa --> Thêm sản phẩm đó vào giỏ hàng
                    let product=products[flag];
                    let addProduct=[...product];
                    addProduct[1]=1;
                    cart.push(addProduct);
                }else{
                    // B9: Nếu rồi --> Tìm vị trí của sản phẩm đó trong giỏ hàng và tăng
                    // số lượng lên một đơn vị
                    cart[inCartIndex][1]++;
                     console.log(cart);
                }
                // B10: Giảm số lượng của sản phẩm đó trong cửa hàng đi 1 đơn vị
                products[flag][1]--;    
            }
            break;
        case 3:
            displayProduce(cart);
            let sum = 0;
            for (let product of cart) {
              sum = sum + product[1] * product[2];
            }
            console.log("Tổng hoá đơn =", sum);
            break;
        case 4:
            console.log("Thoát chương trình")
            break;
        default:
    }
}while(input!==4);
function displayProduce(productList){
    for(let i in productList){
        console.log((i+1)+". "+productList[i].join(" - "));
    }
}