//1

function add(a,b){
    return a + b;
}
console.log(add(1,2));

function subtract(a,b){
    return a - b;
}
console.log(subtract(2,1));

function multiply(a,b){
    return a * b;
}
console.log(multiply(5,2));

function divide(a,b){
    return a / b;
}
console.log(divide(6,3));

//Arrow function
let addD = (a,b) => {  
    return a + b;
}
console.log(addD(1,2));

let subtractD = (a,b) => {
    return a - b;
}
console.log(subtractD(2-1));

let multiplyD = (a,b) => {
    return a * b;
}
console.log(multiplyD(5,2));

let divideD = (a,b) => {
    return a / b;
}
console.log(divideD(6,3));

//2

function firstName() {
    return "Moss";
}

function location() {
    return "Pathumthani";
}

function hobby() {
    return "Walking around the world";
}

console.log("Hi, my name is " + firstName() + " " + "I live in " + location() + " " + "and enjoy " + hobby());

//Arrow function

let firstNameA = () => {
    return "Moss";
}

let locationA = () => {
    return "Pathumthani";
}

let hobbyA = () => {
    return "Run around the world"
}
console.log("Hi, my name is " + firstNameA() + " " + "I live in " + locationA() + " " + "and enjoy " + hobbyA());