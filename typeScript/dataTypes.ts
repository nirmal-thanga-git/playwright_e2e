// JavaScript is dynamically typed language, which means we don't have to specify the data type of a variable when we declare it. The data type of a variable is determined at runtime based on the value assigned to it. However, this can lead to unexpected behavior and bugs in our code, especially in large codebases.

// TypeScript is a statically typed language, which means we can specify the data type of a variable when we declare it. This allows us to catch errors at compile time, before our code is executed. TypeScript provides several built-in data types, as well as the ability to create custom data types using interfaces and classes.

// In this file, we will explore the different data types available in TypeScript and how to use them effectively in our code. 

/*

// JavaScript Example
let x = 10 // number
x = "Hello" // string
x = true // boolean

// TypeScript Example
let y = 10 // number
y = "Hello" // Error: Type 'string' is not assignable to type 'number'
y = true // Error: Type 'boolean' is not assignable to type 'number'

// In the above example, we can see that in JavaScript, we can assign different data types to the same variable, which can lead to unexpected behavior. In TypeScript, we can specify the data type of a variable, which helps us catch errors at compile time and write more robust code.      

*/

// To run JS file - node <file_name>.js - need to add folder path if any - node javaScript/dataTypes.js
// To compile TS file - tsc <file_name>.ts - need to add folder path if any - tsc typeScript/dataTypes.ts
// To run TS file directly - tsx <file_name>.ts - need to add folder path if any - tsx typeScript/dataTypes.ts

// when typescript is type safety, it means that the TypeScript compiler checks the types of variables and expressions in our code to ensure that they are used correctly. This helps us catch errors at compile time, before our code is executed, and write more robust and maintainable code.
// you should explicitly specify the data type

// Three things to remember about TypeScript data types:
// 1. Type/Data Type - The type of data that a variable can hold, such as number, string, boolean, etc.
// 2. Annotation - The process of explicitly specifying the data type of a variable using a colon (:) followed by the data type.
// 3. Type Inference - The process by which TypeScript automatically infers the data type of a variable based on the value assigned to it, without the need for explicit annotation.

//Example:
let age:number = 30;
console.log(age) // output: 30
// number -> data type
// : number -> annotation

//Example:
let name = "John";
console.log(name) // let name: string = "John"; (annotation - explicitly specifying the data type)
// TypeScript infers that the data type of the variable name is string based on the value assigned to it. This is an example of type inference in TypeScript.

/* 

Types of Data Types in TypeScript:
1. Primitive Data Types (also known as Built-in types)
Number, String, Boolean, Null, Undefined, Any, Union Type, void, etc.
2. Non-Primitive Data Types (also known as Object)
Array, class, function, interface, tuple, etc.

*/

// Number Type: The number type represents numeric values, including integers and floating-point numbers. In TypeScript, we can declare a variable of type number using the number keyword.
let childAge: number = 3.5;
console.log(childAge) // output: 3.5

// String Type: The string type represents textual data, such as names, addresses, and messages. In TypeScript, we can declare a variable of type string using the string keyword.
// We can use single quotes, double quotes, or backticks to define a string in TypeScript. Backticks allow us to create multi-line strings and include expressions using template literals.
let lastName: string = 'Doe';
console.log(lastName) // output: Doe

let middleName: string = "Smith";
console.log(middleName) // output: Smith

let fullName: string = `John ${middleName} ${lastName}`; // parameterized string - template literal
console.log(fullName) // output: John Smith Doe


// Boolean Type: The boolean type represents a logical value that can be either true or false. In TypeScript, we can declare a variable of type boolean using the boolean keyword.
let isStudent: boolean = true;
console.log(isStudent) // output: true

// Null and Undefined Types: (Specific to TypeScript)
// The null type represents the absence of a value.
// The undefined type represents a variable that has been declared but has not been assigned a value. 
// In TypeScript, we can declare a variable of type null or undefined using the null and undefined keywords, respectively.
let emptyValue: null = null;
console.log(emptyValue) // output: null
// we cannot assign any other value to a variable of type null, as it can only hold the value null.

let uninitializedValue: undefined = undefined;
console.log(uninitializedValue) // output: undefined
// we cannot assign any other value to a variable of type undefined, as it can only hold the value undefined.

// Any Type: (Specific to TypeScript - this will lose type safety)
// The any type represents any value, regardless of its data type. In TypeScript, we can declare a variable of type any using the any keyword. However, using the any type can lead to unexpected behavior and bugs in our code, as it bypasses the type checking provided by TypeScript.
let randomValue: any = 10;
console.log(randomValue) // output: 10
console.log(typeof randomValue) // output: number

randomValue = "Hello";
console.log(randomValue) // output: Hello
console.log(typeof randomValue) // output: string

randomValue = true;
console.log(randomValue) // output: true
console.log(typeof randomValue) // output: boolean

// Union Type - Combine multiple types into a single type. In TypeScript, we can declare a variable of a union type using the pipe (|) symbol to separate the different types. 
let id: number | string | boolean = 10;
console.log(id) // output: 10
console.log(typeof id) // output: number

id = "Hello";
console.log(id) // output: Hello
console.log(typeof id) // output: string

id = true;
console.log(id) // output: true
console.log(typeof id) // output: boolean

// Void Type: The void type represents the absence of a value or return type. 
// In TypeScript, we can declare a function that does not return a value using the void keyword. 
// A function with a void return type can still perform actions, such as logging to the console or modifying variables, but it does not return any value.
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello World") // --> call the function // output: Hello World

// function with returning a value
function addNumbers(a: number, b: number): number {
    return a + b;
}
let sum: number = addNumbers(5, 10); 
// or let sum = addNumbers(5, 10); // TypeScript infers the type of sum as number based on the return type of the addNumbers function.
console.log(sum) // output: 15  

export {} // to avoid TS error - Cannot redeclare block-scoped variable 'age'.