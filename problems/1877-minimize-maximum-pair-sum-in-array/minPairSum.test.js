const { minPairSum } = require('./minPairSum');

describe('minPairSum', () => {
    it('returns maximum of minimized pairs', () => {
        expect(minPairSum([3, 5, 2, 3])).toBe(7);
    });
});
