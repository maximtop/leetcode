const { validMountainArray } = require('./validMountainArray');

describe('validMountainArray', () => {
    it('validates', () => {
        expect(validMountainArray([1, 2, 3, 2])).toBe(true);
        expect(validMountainArray([2, 1])).toBe(false);
        expect(validMountainArray([0, 3, 2, 1])).toBe(true);
    });
});
