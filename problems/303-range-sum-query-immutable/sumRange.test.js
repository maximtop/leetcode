const { NumArray } = require('./sumRange');

describe('sumRange', () => {
    it('finds sum range', () => {
        const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
        expect(numArray.sumRange(0, 2)).toEqual(1);
    });
});
