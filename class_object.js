// Js Object is an entity state and behavior (property and method)
// Js Object have a special property called prototype
// We can set prototype using __proto__ (reference of a object)

const employee = {

    calcTax() {

        console.log("Tax rate is 10");

    },


};

const em1 = {
    salary: 5000,
    calcTax() {
        console.log("Tax rate is 20");
    },
};

em1.__proto__ = employee;



//Class: Is a program-code template for creating objects.
//Constructor


// class TototaCar {
//     constructor(brand) {
//         console.log("Creating new object");
//         this.brand = brand;

//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }

// }

// class Person {
//     constructor() {
//         console.log("First Constructor");
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineering extends Person {

//     constructor(name) {
//         super();
//         console.log("Second constructor");
//     }

//     work() {
//         super.eat();

//         console.log("working");
//     }
// }

// let rtl = new Engineering("rtl");

let data = 'Secret information';

class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log('Data = ', data);
    }


}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        data = "some new value";
    }

}

let st1 = new User("RL", "adsfsd@gmail.com");
let ad1 = new Admin("RE", "nern@gmail.com");
console.log(st1.viewData());


