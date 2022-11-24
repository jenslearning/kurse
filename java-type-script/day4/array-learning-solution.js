// node array.js
// F5 (strg + shift + y) + Breakpoint (Debuggen)

// map --------------
var array1 = [1, 4, 9, 16];
var map1 = array1.map(value => value * 2);

// Jeder Wert * 2
// expected output: Array [2, 8, 18, 32]
// console.log(map1);



// filter ----------
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(word => word.length > 6);

// Wörter die größer sind als 6 Zeichen
// expected output: Array ["exuberant", "destruction", "present"]
// console.log(result);



// find ------------
var array2 = [5, 12, 8, 130, 44];
var found = array2.find(value => value > 10);

// Erster Wert der größer ist, als 10
// expected output: 12
// console.log(found);



// find index ------
var array3 = [5, 12, 8, 130, 44];
var found2 = array3.findIndex(value => value > 13);

// Erster Wert der größer ist, als 13
// expected output: 3
// console.log(found2);



// fill -----------
var array4 = [1, 2, 3, 4];
var found3 = array4.fill(5, 1);

// fill with 5 from position 1
// expected output: [1, 5, 5, 5]
// console.log(found3);



// copyWithin ----
var array5 = ['a', 'b', 'c', 'd', 'e'];
var found4 = array5.copyWithin(1, 3);

// copy to index 1 all elements from index 3 to the end
// expected output: Array ["a", "d", "e", "d", "e"]
// console.log(found4);



// some ---------
var array6 = [1, 2, 3, 4, 5];

// checks whether an element is even
function even(element) { return element % 2 === 0 };
var found5 = array6.some(even);

// expected output: true
// console.log(found5);



// every --------
var array7 = [1, 30, 39, 29, 10, 13];
var found6 = array7.every(value => value < 40);

// Ist jeder Wert kleiner wie 40?
// expected output: true
// console.log(found6);



// reduce -------
const array8 = [1, 2, 3, 4];
// let found7 = array8.reduce((previous, current) => previous + current);
let found7 = array8.reduce(function (previous, current) {
    return previous + current;
});

// Ergebnis 10
console.log(found7)