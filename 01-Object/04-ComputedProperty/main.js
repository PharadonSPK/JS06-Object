// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

let username = prompt('Enter Username'); // "Pravit"
let age = +prompt('Enter age'); // 60

// let USER = {
//     username: username, // username : "Pravit"
//     age: age, // age : 60
// };
// property shorthand

let USER = { username, age };
/*
{
	username : <value in username variable>,
	age : <value in age variable>
}
*/

console.log(USER);
