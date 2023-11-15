const { countGoodStrings } = require('./countGoodStrings');

describe('countGoodStrings', () => {
    it('counts how many good strings it is possible to build', () => {
        expect(countGoodStrings(3, 3, 1, 1)).toBe(8);
    });
});
