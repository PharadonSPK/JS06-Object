// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

// INIT
// const fruits = {};

// // ACCEPT INPUT
// let key = prompt('Enter fruit');
// let value = +prompt('Enter Quantity');

// // UPDATE FRUITS
// // fruits.key = value; // {key : 10 }

// // fruits['apple'] = value; // {apple : 10}
// if (value == 1) {
//     fruits[key] = value;
// } else if (value > 1) {
//     fruits[`${key}s`] = value;
// }

// console.log(fruits);

const TERMINATE = 'stop';
const fruits = {};

let key;
let value;

do {
    key = prompt('Enter fruit');
    value = prompt('Enter Quantity');

    if (+value == 1) {
        fruits[key] = value;
    } else if (+value > 1) {
        fruits[`${key}s`] = value;
    }
    console.log(key, value);
    console.log(key != TERMINATE && value != TERMINATE);
} while (key != TERMINATE && value != TERMINATE);
// 'stop' != 'stop' => false
// undefined != 'stop' => true

// if (value == 1) {
//     fruits[key] = value;
// } else if (value > 1) {
//     fruits[`${key}s`] = value;
// }

console.log(fruits);
