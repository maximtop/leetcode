/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minProductSum = function (nums1, nums2) {
    const sortedNums1 = nums1.sort((a, b) => a - b);
    const sortedNums2 = nums2.sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < nums1.length; i += 1) {
        sum += sortedNums1[i] * sortedNums2[i];
    }

    return sum;
};

module.exports = { minProductSum };
