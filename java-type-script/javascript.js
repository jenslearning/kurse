console.log("TEST");
var x = [1, 2, 4, 5]
console.log(typeof (x));

var foo = [];
foo.push({
    color: "red"
});

console.log(foo[0].color);

// delegate
var foo = function (paramA, paramB) {
    return paramA + paramB;
};

console.log(typeof foo);

// special typers
// var a = null;
// var b = c;
// console.log(a);
// console.log(b);

jens = "hgj";
console.log(jens);