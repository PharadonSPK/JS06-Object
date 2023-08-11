const log = console.log;
// log('Method and this keyword');

// ###############################
// ########### 1. Intro Method
// ##############################

// Object === Collection of properties and/or method
// each record => called property
// each property => <key>:<value>

// some record => <key>:<FN>
// called method == ความสามารถของ Object
// const programmer = {
//     name: 'Pavit',
//     age: 30,
//     dev: devWebsite,
//     meet: meeting,
//     sleep: sleep,
// };

// function devWebsite() {
//     console.log("I'm working");
// }
// function meeting() {
//     console.log("I'm meeting");
// }

// function sleep() {
//     console.log("I'm sleeping");
// }
// property
// Syntax <obj>.<key>
// log(programmer.name);
// log(programmer.age);

// method == ความสามารถของ Object
// Syntax : <obj>.<method>()
// programmer.dev();
// programmer.meet();
// programmer.dev();
// programmer.meet();
// programmer.sleep();
// programmer.dev();
// เพิ่ม method ให้ programmer 1 อย่าง และลองเรียกใช้งาน

// #################################
// ########### 2. Alternative Syntax
// ##################################

// let name = 'John';
// let age = 30;
// const programmer = {
//     // property shorthand
//     name,
//     age,
//     dev: function () {
//         console.log("I'm working");
//     },
//     meet: () => console.log("I'm meeting"),
//     // method shorthand
//     sleep() {
//         console.log("I'm sleeping");
//     },
//     // sleep : () => console.log("I'm sleeping")
// };

// programmer.dev();
// programmer.meet();
// programmer.sleep();

// Mini-lab
// สร้าง Object ของตัวเอง
// ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ
// ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// key : namedFunction
// key : anonymous FN
// key : arrowFN
// key : shortHand

// function playSport(type) {
//     console.log(`I'm playing ${type}`);
// }
// log(typeof playFootball);

// const me = {
//     name: 'Pavit',
//     hair: 'Black',
//     eye: 'Brown',
//     gender: 'Male',
//     myEx: ['John', 'Jane'],
//     sport: playSport,
//     sleepAllDay: function () {
//         console.log("I'm dead");
//     },
//     eatAllNight: (menu) => console.log(`I'm eating ${menu} all the time`),
//     focus(task) {
//         console.log(`I'm working on ${task} in focus mode`);
//     },
//     // focus : () => {...logic...}
//     // focus : function focus () {...logic...}
// };

// me.sport('basketball');
// me.sport();
// me.sleepAllDay();
// me.eatAllNight('TAX');
// me.focus('javascript lab');

// #########################
// ########### 3. Intro OOP
// #########################

// OOP : Object Oriented Program

// const car = {
//     brand: 'Tesla',
//     model: 'X',
//     speed: 80,
//     drive: () => console.log('Driving'),
//     'auto pilot': () => console.log('Self Driving'),
// };

// log(car.brand, car.model);

// // Caller.Method
// car.drive();
// car['auto pilot']();

// const calculator = {
//     sum: (x, y) => x + y,
//     minus: (x, y) => x - y,
// };

// let r1 = calculator.sum(5, 7);
// let r2 = calculator.minus(7, 3);
// log(r1, r2);

// log(car.speed);
// car.speed = calculator.sum(car.speed, 20);
// log(car.speed);

// ############################
// ########### 4. This Keyword
// ############################

// JS Keyword : if,else, for, while, do, switch, this
// Question : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้

// const user = {
//     name: 'CODECAMP',
//     age: 15,
//     sayHi: function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld: function () {
//         console.log(this);
//         // this == user , this.age == user.age
//         this.age++;
//     },
// };

// user.sayHi();
// user.name = 'software park';
// user.sayHi();

// log(user.age);
// user.growOld();
// log(user.age);

// Q : ค่าของ this ถูก Solve ตั้งแต่ตอนที่เขียน function รึเปล่า ?
// A : ไม่
// This == Dynamics Caller/Dynamics Context

// FN Declaration

// function dev(feature) {
//     console.log(`${feature} feature developed by ${this.name}`);
// }

// const programmer1 = {
//     name: 'John',
//     develop: dev,
// };

// const programmer2 = {
//     name: 'Jane',
//     develop: dev,
// };

// FN ถูกเรียกที่ไหน
// alert('hi'); // window.alert === this.alert

// Window
// this.alert();

// A : this ถูก solve ตอนเรียกใช้ Method
// Caller.method => this == Caller == Object before the dot

// Checkpoint-1 : this == object ที่เรียกใช้ method

// programmer1.develop('Login');
// programmer1.develop('Cart');
// programmer2.develop('Register');

// let m = 'Hello';
// function myMessage() {
//     // let m = 'hi';
//     console.log(m);
// }

// myMessage();

// ##########################################
// ########### 5. Execution Context == Caller
// ##########################################

// Global(Browser)  Context : window object
// window.alert("I'm Global");
// this.alert("I'm Global this");
// alert("I'm execute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting
function sayHi() {
    console.log(this); // window
}
var a = 'm';

// Execute Context = Window
// window.sayHi();
// this.sayHi();
// sayHi();

// Function Context
var name = 'Codecamp';
function sayHello() {
    console.log(this.name);
}

// Window Caller
sayHello();
window.sayHello();

const user = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },
    srcm: function () {
        console.log(`scream by ${this.name}`);
    },
};

// user Caller
user.say();
// SUMMARY : this == Object Caller

// Arrow ไม่มีความสามารถในการสร้าง Context
// Loose Context => Chain to Window
user.scream(); // dont use this keyword with arrow function
user.srcm();

// LAB

// let calculator = {
//     read() {
//         this.x = +prompt('Enter num1'); // line276 : calculator.x = +prompt()
//         this.y = +prompt('Enter num2'); // line276 : calculator.y = +prompt()
//     },
//     sum() {
//         return this.x + this.y;
//     },
//     mul() {
//         return this.x * this.y;
//     },
// };

// log(calculator);

// calculator.read();
// log(calculator);
// log(calculator.sum());
// log(calculator.mul());
