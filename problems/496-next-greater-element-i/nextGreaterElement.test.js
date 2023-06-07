const { nextGreaterElement } = require('./nextGreaterElement');

describe('nextGreaterElement', () => {
    it('finds next greater element', () => {
        const nums1 = [4, 1, 2];
        const nums2 = [1, 3, 4, 2];
        expect(nextGreaterElement(nums1, nums2)).toEqual([-1, 3, -1]);
    });
});
