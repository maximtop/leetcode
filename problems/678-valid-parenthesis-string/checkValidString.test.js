const { checkValidString } = require('./checkValidString');

describe('checkValidString', () => {
    it('checks if string is valid', () => {
        expect(checkValidString('()')).toBe(true);
        expect(checkValidString('(*)')).toBe(true);
        expect(checkValidString('(*))')).toBe(true);
        expect(checkValidString('(*)))')).toBe(false);
        expect(checkValidString('(*)(')).toBe(false);
    });
});
