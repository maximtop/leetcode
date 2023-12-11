const { numDistinct } = require('./numDistinct');
const { numDistinctDynamic } = require('./numDistinctDynamic');

describe('numDistinctRecursive', () => {
    it('counts how much subsequences it is possible to build', () => {
        expect(numDistinct('rabbbit', 'rabbit')).toBe(3);
    });
});

describe('numDistinctDynamic', () => {
    it('counts how much subsequences it is possible to build', () => {
        expect(numDistinctDynamic('rabbbit', 'rabbit')).toBe(3);
    });
});
