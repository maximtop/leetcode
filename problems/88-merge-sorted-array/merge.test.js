const { merge } = require('./merge');

describe('merge', () => {
    it('merges two arrays', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    it('merges two arrays even if one of them is empty', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });
});
