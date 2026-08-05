// Operators in TypeScript are symbols that perform operations on one or more operands. 
// They are used to manipulate data and perform calculations. In this file, we will explore the different types of operators available in TypeScript and how to use them effectively in our code.

/*

Types of Operators in TypeScript:
1. Arithmetic Operators
2. Assignment Operators
3. Comparison/Relational Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operator
7. Type Operators

*/  

// 1. Arithmetic Operators: 
// Arithmetic operators are used to perform mathematical operations on numeric values.

let a: number = 10, b: number = 5;
// Addition
let sum: number = a + b;
console.log(sum) // output: 15

// Subtraction
let difference: number = a - b;
console.log(difference) // output: 5

// Multiplication
let product: number = a * b;
console.log(product) // output: 50

// Division
let quotient: number = a / b;
console.log(quotient) // output: 2

// Modulus (Remainder)
let remainder: number = a % b;
console.log(remainder) // output: 0

// Exponentiation
let power: number = a ** b;
console.log(power) // output: 100000

// Increment
a++;
console.log(a) // output: 11

// Decrement
b--;
console.log(b) // output: 4 

// 2. Assignment Operators:
// Assignment operators are used to assign values to variables. 
// The most common assignment operator is the equal sign (=), which assigns the value on the right to the variable on the left.

let x: number = 10; // Assigning value 10 to variable x
console.log(x) // output: 10

console.log(x += 5) // output: 15 (x = x + 5)
console.log(x -= 3) // output: 12 (x = x - 3)

console.log(x *= 2) // output: 24 (x = x * 2)

console.log(x /= 4) // output: 6 (x = x / 4)

console.log(x %= 5) // output: 1 (x = x % 5)

// 3. Comparison/Relational Operators:
// Comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.

// greater than >, less than <, greater than or equal to >=, less than or equal to <=, equal to ==, strict equal to ===, not equal to !=, strict not equal to !==

let p: number = 10;
let q: number = 20;
console.log(p > q) // output: false
console.log(p < q) // output: true
console.log(p >= q) // output: false
console.log(p <= q) // output: true
console.log(p == q) // output: false
console.log(q === p) // output: false
console.log(p != q) // output: true
console.log(q !== p) // output: true   

// 4. Logical Operators: