export default class SplitStrings {
    split(value: string) {

        const result: string[] = [];

        if (value.length % 2 === 0) {
            for (let i = 0; i < value.length / 2; i++) {
                result.push(value[i * 2] + value[i * 2 + 1]);
            }

        } else {
            for (let i = 0; i < (value.length - 1) / 2; i++) {
                result.push(value[i * 2] + value[i * 2 + 1]);
            }
            result.push(value[value.length - 1] + "_");
        }
        return result;
    }
}

/* export default class SplitStrings {

    split2(str: string) {
        if (str.length % 2 !== 0) {
            str += '_';
        }
        return str.match(/.{2}/g) || [];
    }


    // private SPLIT_LENGTH = 2;
    // private END_CHAR = '_';

    // split2(str: string) {

    //     const { SPLIT_LENGTH, END_CHAR } = this;

    //     const numEndChars = (SPLIT_LENGTH - str.length % SPLIT_LENGTH) % SPLIT_LENGTH;
    //     if (numEndChars !== 0) {
    //         str += END_CHAR.repeat(numEndChars);
    //     }
    //     const re = new RegExp(`.{${SPLIT_LENGTH}}`, 'g');
    //     return str.match(re) || [];
    // }


    // split3(str: string) {

    //     if (str.length % 2 !== 0) {
    //         str += '_';
    //     }

    //     const arr = [];
    //     for (let i = 0; i < str.length; i+=2) {
    //         arr.push(str.substring(i, i+2));
    //     }
    //     return arr;
    // }
} */

// export default class SplitStrings {
//     split(value: string): string[] {
//         const result = value.split(/(.{2})/).filter((item) => item);

//         const stringsIndex = result.length - 1;
//         if (result[stringsIndex].length === 1) {
//             result[stringsIndex] += '_';
//         }

//         return result;
//     }
// }