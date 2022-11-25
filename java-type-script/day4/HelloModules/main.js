const { Calculator, person } = require('calculator');

const calculator = new Calculator();
console.log(calculator.add(19, 2));

console.log(person);
console.log('Hello ' + person.name);
console.log(person.age);
console.log(person.city);

const Greeting = require('greeting');

const greeting = new Greeting();
console.log(greeting.sayHello('Jens'));