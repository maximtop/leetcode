const { countPairs } = require('./countPairs');

describe('countPairs', () => {
    it('counts pairs less than target', () => {
        expect(countPairs([-1, 1, 2, 3, 1], 2)).toBe(3);
    });
});
