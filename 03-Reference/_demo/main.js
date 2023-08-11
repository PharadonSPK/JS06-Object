const log = console.log;
log('Learn Ref.');

// Copied by Value
// Copied by Reference

// PRIMITIVE
let message = 'Hello';

// *** COPY BY VALUE
let word = message;
let phrase = message;
// log(message);
// log(word);

message = 'Hi';
log(message);
log(word);

// OBJECT
// User เก็บ address ของ Literal Object
let user = {
    name: 'John',
    age: 33,
};

// ***  COPIED BY REFERENCE
// assign Adress ของ user ให้กับ employee
let employee = user;

user.name = 'Joe';
log(employee.name);

employee.age = 50;
log(user.age);
