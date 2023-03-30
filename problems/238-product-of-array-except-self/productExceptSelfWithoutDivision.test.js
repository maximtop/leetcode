const { productExceptSelf } = require('./productExceptSelfWithoutDivision');

describe('productExceptSelfWithoutDivision', () => {
    it('finds product except self without division', () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
        expect(JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3])))
            .toEqual(JSON.stringify([0, 0, 9, 0, 0]));
        expect(JSON.stringify(productExceptSelf([-1, 1, 0, -3, 0])))
            .toEqual(JSON.stringify([0, 0, 0, 0, 0]));
    });

    it('compare -0 with 0 in jest', () => {
        expect(-1 * 0).toBe(1 * 0);
    });
});
