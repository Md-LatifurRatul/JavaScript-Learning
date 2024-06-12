// var (Variable can be re-declared & updated. A global scope variable)
// let (Variable cannot be re-declared but can be updated. A block scope variable)
// const (Variable cannot be re-declared or updated. A block scope variable)
// Declated but value we don't know (Undefined)
// Const always initiazing
// Null is a object, absence of a object

let name = "ratul";

name = "islam";

var firstName = "Ratul";
var firstName = 20;
const pi = 3.1416;
// pi = 3.23; // cannnot declared
// console.log(pi); //run time error
console.log(name);
console.log(firstName);

{
    //Block
    let a = 5;
    console.log(a);
}

let x = BigInt('123');
let y = Symbol("hello");

// Datatype
// PRIMITIVE(7)
//Number
//String
//Boolean
//null
//Undefined
//BigInt
//Symbol

//NOT PRIMITIVE
//Object (It is a collection of values)(key: value pair)

const student = {       //Object key can update
    fullName: "STE",
    age: 20,
    cgpa: 3.89,
    isPass: true,
};