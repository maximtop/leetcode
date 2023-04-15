const { minEatingSpeed } = require('./minEatingSpeed');

describe('minEatingSpeed', () => {
    it('finds min k', () => {
        const piles = [3, 6, 7, 11];
        const h = 8;
        expect(minEatingSpeed(piles, h)).toBe(4);
    });
});
