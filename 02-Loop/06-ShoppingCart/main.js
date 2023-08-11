const log = console.log;
// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า
// จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์

// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา
// ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด

// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// Sub Program-1 : Input
let name = prompt('Enter Product Name');
let quantity = +prompt('Enter Quantity');
let price = Number(prompt('Enter Price'));
let discount = prompt('Enter Discount') * 1;

// Sub Program-2 : CreateObject
// const products = {
//     name: name, // name : 'Hermes'
//     quantity: quantity, // quantity : 20
//     price: price, // price : 500_000
//     discount: discount, // discount : 0.1
// };
// ***เมืื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value*** สามารถยุบ Syntax (Property shorthand)
const products = {
    name,
    quantity,
    price,
};
if (discount != 0) {
    products['discount'] = discount;
}

log(products);
// Sub Program-3 : Calculate Price
// discount 10%, paid 90%
// discount 0.1, paid 0.9
// price,quantity,discount  => TotalPrice

// function calcPrice(price, quantity, discount = 0) {
//     let totalPrice = price * quantity * (1 - discount);
//     // 			 100 * 10 (1-0.1) => 1000(0.9) => 900
//     return totalPrice;
// }

// let result = calcPrice(products.price, products.quantity, products.discount);
// log(result);

function calcPrice(productsObj) {
    let price = productsObj.price;
    let quantity = productsObj.quantity;
    let discount = productsObj.discount ? productsObj.discount : 0;
    return price * quantity * (1 - discount);
}
let result = calcPrice(products);
//let result  = calcPrice({name,quantity,price,discount,})

log(result);

// const shoppingCart = {}

// do {
//     productName = prompt('Product name')
//     amount = +prompt('How many amount of product')
//     price = +prompt('How much')
//     discount = +prompt('How many discount')
//     if (productName == null ||  productName.trim() == "") {
// 		throw Error("Invalid")
//         break
//     }else {
//         shoppingCart.itemName = productName;
//     }if (amount == null ||  amount.trim == "") {
//         break
//     }else {
//         shoppingCart.amountProduct = amount;
//     }if (price == null || price.trim == "") {
//         break
//     }else {
//         shoppingCart.priceProduct = price;
//     }if (discount == null || discount.trim == "" || discount == 0) {
//         // break
//     }else {
//         shoppingCart.discountion = discount;
//     }
// } while(false);

// console.log(shoppingCart)

// let realPrice = obj => {
//     let cost = shoppingCart.priceProduct * shoppingCart.amountProduct ;
//     let division = cost * shoppingCart.discountion / 100;
//     return(cost - division);
// }
