import SplitStrings from '../src/split-strings';

describe('Complete the solution so that it splits the string into pairs of two characters.', () => {
    it('a', () => {
        const splitStrings = new SplitStrings();
        const value = 'a';

        const result = splitStrings.split(value);

        expect(result).toEqual(['a_']);
    });


    it('ab', () => {
        const splitStrings = new SplitStrings();
        const value = 'ab';

        const result = splitStrings.split(value);

        expect(result).toEqual(['ab']);
    });

    it('abc', () => {
        const splitStrings = new SplitStrings();
        const value = 'abc';

        const result = splitStrings.split(value);

        expect(result).toEqual(['ab', 'c_']);
    });

    it('abcdef', () => {
        const splitStrings = new SplitStrings();
        const value = 'abcdef';

        const result = splitStrings.split(value);

        expect(result).toEqual(['ab', 'cd', 'ef']);
    });
});