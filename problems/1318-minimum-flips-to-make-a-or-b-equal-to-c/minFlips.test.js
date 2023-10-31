const { minFlips } = require('./minFlips');

describe('minFlips', () => {
    it('returns min flips required', () => {
        expect(minFlips(2, 6, 5)).toBe(3);
        expect(minFlips(4, 2, 7)).toBe(1);
    });
});
