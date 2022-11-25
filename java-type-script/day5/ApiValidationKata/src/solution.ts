export default class IpValidation {
    isValidIP(ip: string): boolean {
        const numbers = ip.split('.');

        return numbers.length === 4 && numbers.every((value, index) => {
            let startNotWithZero = true;

            if (value.toString().length > 1) {
                startNotWithZero = +value.toString().trim()[0] !== 0;
            }

            let validWhitespace = true;

            if (index > 0 && index < 3) {
                validWhitespace = !value.includes(' ');
            } else if (index === 0) {
                validWhitespace = !value.endsWith(' ');
            } else if (index === 3) {
                validWhitespace = !value.startsWith(' ');
            }

            return +value <= 255 && +value >= 0 && validWhitespace && startNotWithZero;
        });
    }
}