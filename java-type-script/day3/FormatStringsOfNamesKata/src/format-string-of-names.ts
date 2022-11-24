// export class FormatStringOfNames {

//     list(persons: Person[]): string {  

//         if (persons.length === 0) {
//             return "";
//         } else if (persons.length === 1) {
//             return persons[0].name
//         } else if (persons.length === 2) {
//             return persons[0].name + " & " + persons[1].name;
//         } else if (persons.length > 2) {
//             let result = "";
//             for (let i = 0; i < persons.length - 1; i++) {
//                 result += persons[i].name + ", ";
//             }

//             result = result.slice(0, result.length - 2)
//             result += " & " + persons[persons.length - 1].name;
//             return result

//         }
//         return "";

//     }
// }

// export interface Person {
//     name: string;
// }

export class FormatStringOfNames {
    list(persons: Person[]): string {
        const names = persons.map((person) => person.name).join(', ');
        let lastIndex = names.lastIndexOf(',');

        if (lastIndex === -1) {
            return names;
        }

        return names.substring(0, lastIndex) + ' &' + names.substring(++lastIndex, names.length);
    }
}

export interface Person {
    name: string;
}