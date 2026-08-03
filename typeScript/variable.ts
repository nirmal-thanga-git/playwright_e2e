// Variable: Variable is the container which can hold / store some data.

// var, let, const

// Syntax:  keyword variableName:data type (optional) = value
// Example: var age:number(optional) = 30

// var vs let vs const - five parameters

/* 
1. Scope
2. Declaration/Value Assignment
3. Re-declaration
4. Re-initialization/re-assignment
5. Hoisting
 */

//var - we do not use this in modern JS/TS.
//let - use let when you need a variable that can change.
//const - use const when the variable value should not change.

//1. Scope - Accessible area (Functional Scope and Block Scope)
// var is the functional scope
// let and const are the block scope

//Example 1: var (functional scope)

function varScope() {
    if (true) {
        var msg = "Hello World";
        // console.log(msg) - we can even access it inside block
    }
    console.log(msg) // we can access it in functional block
}
varScope();

//Example 2: let and const (block scope)

function letScope() {
    if (true) {
        let msg = "Hello World";
        const greet = "Hello Const";
        console.log(msg) // we can access it only inside block
        console.log(greet) // we can access it only inside block
    }
    // console.log(msg) // cannot access
    // console.log(greet) // cannot access
}
letScope();

//2. Declaration / Value Assignment (Initialization)

//Example 1: var can be declared without initialization
var x //declaration
console.log(x) // undefined
x = 30 //initialization
console.log(x) //output: 30

//Example 2: let can be declared without initialization
let y //declaration
console.log(y) // undefined
y = 20 //initialization
console.log(y) //output: 20

//Example 3: const must be initialized at the time of declaration
// const z  
const z = 5
console.log(z) //output: 5

//3. Re-declaration

//var allows the re-declaration
// let and const - not allows the re-declaration (making the code safe)

//Example 1: var allows the re-declaration
var age = 30
var age = 40
console.log(age) //output: 40

//Example 2: let and const - not allows the re-declaration within block
// we can re-declare the variable by using let and const outside the block scope but not inside the block scope
let fruit = "apple"
if (fruit == "apple") {
    let fruit = "banana"
    console.log(fruit) //output: banana
}

const ani = "dog"
if (ani == "dog") {
    const ani = "cat"
    console.log(ani) //output: cat
}

//4. Re-initialization / Re-assignment
// var and let allows the re-initialization / re-assignment
// const - not allows the re-initialization / re-assignment

//Example 1: var allows the re-initialization / re-assignment
var num = 10
num = 20
console.log(num) //output: 20

//Example 2: let allows the re-initialization / re-assignment
let count = 5
count = 15
console.log(count) //output: 15

//Example 3: const does not allow the re-initialization / re-assignment
const pi = 3.14
// pi = 3.14159 // This will throw an error: "Cannot assign to 'pi' because it is a constant."  

//5. Hoisting
//Example 1:
// var (Hoisted with undefined)
//console.log(a) // undefined
var a = 10
console.log(a) // output: 10

//Example 2:
// let and const (Hoisted but not initialized)
// console.log(b) // not initialized
let b = 20
console.log(b) // output: 20

//Example 3:
// console.log(c) // not initialized
const c = 30
console.log(c) // output: 30

