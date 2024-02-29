//ES5 WAY
//const calculator = require ("./calculator");
//const helpers = require("./helpers") 
//const { v4: uuidv4 } = require("uuid");

// ES6 WAY
import { v4 as uuidv4 } from "uuid";
import * as calculator from "./calculator.js";
import { generateGuidLocally } from "./helpers.js";

const sumOfTwoNumbers = calculator.sum(5, 10);

console.log("Sum of two numbers is:", sumOfTwoNumbers);

const result2 = calculator.substract(25, 7);

console.log("Result of substraction:", result2);

const result3 = calculator.multiply (4,5);

console.log("Result of multiplication:", result3);

const result4 = calculator.divide (45,9);

console.log("Result of division:", result4);

const result5 = calculator.power (5,3);

console.log("5 to the power of 3 is:", result5);

console.log("<------------------------>");

console.log("Random guid manually:", generateGuidLocally());
console.log("Random guid from uuid library:" , uuidv4());