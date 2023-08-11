const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
    // key: 'JaAEEE',
};

// For IN : Loop through Object
// for (let <key_variable> in <obj>) {}

for (let key in user) {
    console.log(`KEY: ${key}`); // auto dynamics assign by JS in <string>
    //1st :  let key = "firstName"
    //2nd :  let key = "lastName"
    //3rd :  let key = 'age'

    console.log(`VAL : ${user[key]}`); // need to access by bracket , computed key
    // 1st : user[key] == user['firstName'] ==> Codecamp
    // 2nd : user[key] == user['lastName'] ==> Software Park
    // 3rd : user[key] == user['age'] ==> 15

    console.log(user.key);
    console.log('\n');
    // 1st : user.key == user['key'] ==> undefined
    // 2nd :  user.key == user['key'] ==> undefined
    // 3nd :  user.key == user['key'] ==> undefined
}

// 'firstName' in user; // true
// 'age' in user; // true
// 'phone' in user; // false
