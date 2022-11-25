// CommonJS
// import * as  Greeting from 'greeting';

// const greeting = new Greeting();
// console.log(greeting.sayHello('Jens'));

// SystemJS
// UMD
// ...


import { Calculator } from "./calculator.js";
//import { Calculator } from "./calculator"; (for use with //"module": "commonjs", in tsconfig.json
const calculator = new Calculator();
const result = calculator.add(9, 6);
console.log(result);
const message = "THIS IS A MESSAGE";

