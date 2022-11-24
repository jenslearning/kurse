export default class SpinningWords {
    spin(word: string) {
        //throw new Error('Method not implemented.');
        const splitArray = word.split(' ');
        let sentence = '';
        if (splitArray.every(word => word.length <= 5)) {
            return word;
        } else {
            for (let i = 0; i < splitArray.length; i++) {
                if (splitArray[i].length <= 5) {
                    sentence += splitArray[i] + ' ';
                } else {
                    let charArray = splitArray[i].split('');
                    charArray = charArray.reverse();
                    sentence += charArray.join('') + ' ';
                }
            }
        }
        return sentence.trim();
    }
}



//return word.split(' ').map(value => value.length > 5 ? value.split("").reverse().join("") : value).join(" ");


/* export default class SpinningWords {
    spin(word: string): string {
        return word.split(' ')
            .map((value) => {
                if (value.length >= 5) {
                    return value.split('').reverse().join('');
                }

                return value;
            })
            .join(' ');
    }
} */


/* export default class SpinningWords {
    
    reverse(word: string) {
        return word.length < 5 ? word : [...word].reverse().join('');
    }
    
    spin(sentence: string) {
        return sentence.split(' ').map(this.reverse).join(' ');
    }
} */