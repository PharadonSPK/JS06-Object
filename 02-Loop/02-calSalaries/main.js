// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

// ```js
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// ```

function isEmptyObj(obj) {
    let isEmpty = true;
    for (let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
}

// (OBJ) => NUMBER
function calSalaries(object) {
    // 1.Validate => แยก Service
    if (isEmptyObj(object)) return 0;
    // 2.Calculate
    let sum = 0;
    for (let key in object) {
        // <obj>.<key>
        // <obj>[key]
        // console.log(object[key]); // object['age']
        sum += object[key];
    }

    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let total = calSalaries(salaries);
console.log(total);
