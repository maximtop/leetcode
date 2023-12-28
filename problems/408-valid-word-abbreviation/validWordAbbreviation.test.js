const { validWordAbbreviation } = require('./validWordAbbreviation');

describe(validWordAbbreviation, () => {
    it('checks if abbreviation is correct', () => {
        expect(validWordAbbreviation('apple', 'a3e')).toBe(true);
        expect(validWordAbbreviation('apple', 'a2e')).toBe(false);
        expect(validWordAbbreviation('internationalization', 'i12iz4n')).toBe(true);
        expect(validWordAbbreviation('internationalization', 'i5a11o1')).toBe(true);
        expect(validWordAbbreviation('a', '01')).toBe(false);
        expect(validWordAbbreviation('bignumberhahaha', '999999999')).toBe(false);
    });
});
