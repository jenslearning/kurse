const { Calculator, person } = require('calculator');

const calculator = new Calculator();
console.log(calculator.add(19, 2));

console.log(person);
console.log('Hello ' + person.name);
console.log('Hello ' + person.age);
console.log('Hello ' + person.city);

