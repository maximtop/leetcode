const { differenceOfSum } = require('./differenceOfSum');

describe('differenceOfSum', () => {
    it('calculates difference of sum', () => {
        expect(differenceOfSum([1, 1, 1, 1])).toBe(0);
        expect(differenceOfSum([1, 1, 1, 12])).toBe(9);
    });
});
