const { minSwaps } = require('./minSwaps');

describe('minSwaps', () => {
    it('finds min number of swaps', () => {
        expect(minSwaps('][][')).toBe(1);
        expect(minSwaps(']]][[[')).toBe(2);
    });
});
