// interface Person3 {
//     name: string,
//     age?: number
//     sayHello: () => void;
// }

// interface Person3{
//     homeTown: string
// }

// const jens: Person3 = {
//     name: 'Jens',
//     sayHello() {
//         console.log(this.name)
//     },
//     homeTown: 'Mobile Alabama'
// }


// interface BetterPerson extends Person {
//     surName: string,
//     sayGoodbye() {
//         console.log("cu");
// }
// }

// const susi: BetterPerson = {
//     name: 'Jens',
//     surName: 'sorglos',
//     sayHello() {
//         console.log(this.name)
//     }
// }



// interface Person2 {
//     name: string;
//     age?: number;
// }

// // Duck Typing
// interface Person2 {
//     company: string;
// }

// // Klassischer einsatszweck von Interfaces
// interface Company {
//     name: string;
//     sayHello: () => void;
// }

// class Bar implements Company {
//     name: string = '';

//     sayHello() {
//         console.log(this.name);
//     };
// }

// function foo(person: Person2) {
//     console.log(person.name);
// }

// const person: Person2 = {
//     name: 'Brendan',
//     company: ''
// }

// // Duck Typing
// const wuff = {
//     name: '',
//     company: '',
//     hobbies: []
// }

// foo(wuff);

// document.body

// interface HTMLElement {
//     ABC: string;
// }