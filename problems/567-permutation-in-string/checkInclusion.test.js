const { checkInclusion } = require('./checkInclusion');

describe('checkInclusion', () => {
    it('finds if second string has permutation of the first', () => {
        expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
        expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
        expect(checkInclusion('adc', 'dcda')).toBe(true);
    });
});
