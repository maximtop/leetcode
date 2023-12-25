const { profitableSchemes } = require('./profitableSchemes');

describe(profitableSchemes, () => {
    it('finds count of the profitable schemes', () => {
        expect(profitableSchemes(5, 3, [2, 2], [2, 3])).toBe(2);
        expect(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8])).toBe(7);
        expect(profitableSchemes(1, 10, [1, 2, 2, 2, 1], [5, 4, 3, 2, 7])).toBe(0);
    });
});
