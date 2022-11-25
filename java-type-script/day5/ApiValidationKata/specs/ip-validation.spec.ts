import IPValidation from '../src/ip-validation';

describe('Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.', () => {
    it('1.2.3.4 should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = '1.2.3.4';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('123.45.67.89 should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = '123.45.67.89';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('127.1.1.0 should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = '127.1.1.0';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('0.0.0.0 should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = '0.0.0.0';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('0.34.82.53 should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = '0.34.82.53';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('"1.2.3.4 " should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = '1.2.3.4        ';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('" 1.2.3.4 " should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = ' 1.2.3.4 ';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('" 1.2.3.4" should valid', () => {
        const ipvalidation = new IPValidation();
        const ip = ' 1.2.3.4';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeTruthy();
    });

    it('"" should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('abc.def.ghi.jkl should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = 'abc.def.ghi.jkl';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('12.34.56 .1 should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '12.34.56 .1';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('12.34.56.-1 should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '12.34.56.-1';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('1.2.3 should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '1.2.3';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('1.2.3.4.5 should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '1.2.3.4.5';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('123.456.78.90 should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '123.456.78.90';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('123.045.067.089 should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '123.045.067.089';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });

    it('12.34.56.-7 should invalid', () => {
        const ipvalidation = new IPValidation();
        const ip = '12.34.56.-7';

        const result = ipvalidation.isValidIP(ip);

        expect(result).toBeFalsy();
    });
});
