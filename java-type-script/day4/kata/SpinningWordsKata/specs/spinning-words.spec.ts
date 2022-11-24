import SpinningWords from '../src/spinning-words';

// tslint:disable-next-line:max-line-length
describe('Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.', () => {
    it('"Hey fellow warriors" shoulds return "Hey wollef sroirraw"', () => {
        const spinningwords = new SpinningWords();
        const word = 'Hey fellow warriors';

        const result = spinningwords.spin(word);

        expect(result).toBe('Hey wollef sroirraw');
    });

    it('"This is a test" shoulds return "This is a test"', () => {
        const spinningwords = new SpinningWords();
        const word = 'This is a test';

        const result = spinningwords.spin(word);

        expect(result).toBe('This is a test');
    });

    it('"This is another test" shoulds return "This is rehtona test"', () => {
        const spinningwords = new SpinningWords();
        const word = 'This is another test';

        const result = spinningwords.spin(word);

        expect(result).toBe('This is rehtona test');
    });
});