const { minProductSum } = require('./minProductSum');

describe('minProductSum', () => {
    it('works', () => {
        const nums1 = [2, 1, 4, 5, 7];
        const nums2 = [3, 2, 4, 8, 6];
        expect(minProductSum(nums1, nums2)).toBe(65);
    });
});
