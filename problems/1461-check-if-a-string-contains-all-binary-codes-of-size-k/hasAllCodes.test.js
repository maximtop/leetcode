const { hasAllCodes } = require('./hasAllCodes');

describe(hasAllCodes, () => {
    it('checks if string has all possible combinations', () => {
        expect(hasAllCodes('00110110', 2)).toBe(true);
        expect(hasAllCodes('0011', 2)).toBe(false);
    });
});
