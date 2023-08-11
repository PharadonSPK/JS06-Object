const log = console.log;

log('Constructor Function');

const dev1 = {
    name: 'john',
    age: 32,
    role: 'dev',
    salary: 40_000,
    dev: function () {
        console.log('im develop some features');
    },
};

// Object Creators == Constructor Function

function Developer(name, age) {
    // [1] Implicit create this = {}

    this.name = name; // {name: "Pavit"}
    this.age = age; // {name:"Pavit", age : 25 }
    this.role = 'dev'; // {name:"Pavit", age : 25, role : "dev" }
    this.salary = 40_000; //  {name:"Pavit", age : 25, role : "dev", salary:40_000 }
    this.dev = function () {
        console.log(`${this.name} develop some features`);
    }; // {name....., dev : fn()}

    // [2] Implicit Return this
    // return {name....., dev : fn()}
}

// this == dev2
// [3] this === Instance
const dev2 = new Developer('Pavit', 25);
// log(dev2);
dev2.dev();

const dev3 = new Developer('Jane', 50);
// log(dev3);
dev3.dev();
