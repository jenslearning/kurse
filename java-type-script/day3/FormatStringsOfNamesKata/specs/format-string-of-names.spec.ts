import { FormatStringOfNames, Person } from '../src/format-string-of-names';

// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript
describe('Format a string of names like "Bart, Lisa & Maggie".', () => {
    it("Must work with no names", () => {
        const formatstringofnames = new FormatStringOfNames();
        const persons: Person[] = [];
        const result = formatstringofnames.list(persons);

        expect(result).toBe("");
    });

    it("Bart", () => {
        const formatstringofnames = new FormatStringOfNames();
        const persons: Person[] = [{ name: "Bart" }];
        const result = formatstringofnames.list(persons);

        expect(result).toBe("Bart");
    });

    it("Bart & Lisa", () => {
        const formatstringofnames = new FormatStringOfNames();
        const persons = [{ name: "Bart" }, { name: "Lisa" }];
        const result = formatstringofnames.list(persons);

        expect(result).toBe("Bart & Lisa");
    });

    it("Bart, Lisa & Maggie", () => {
        const formatstringofnames = new FormatStringOfNames();
        const persons = [
            { name: "Bart" },
            { name: "Lisa" },
            { name: "Maggie" }
        ];
        const result = formatstringofnames.list(persons);

        expect(result).toBe("Bart, Lisa & Maggie");
    });

    it("Bart, Lisa, Maggie, Homer & Marge", () => {
        const formatstringofnames = new FormatStringOfNames();
        const persons = [
            { name: "Bart" },
            { name: "Lisa" },
            { name: "Maggie" },
            { name: "Homer" },
            { name: "Marge" }
        ];
        const result = formatstringofnames.list(persons);

        expect(result).toBe("Bart, Lisa, Maggie, Homer & Marge");
    });
});