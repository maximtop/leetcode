/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
    const map = new Map();
    const res = new Array(nums1.length).fill(-1);
    for (let i = 0; i < nums1.length; i += 1) {
        map.set(nums1[i], i);
    }
    for (let i = 0; i < nums2.length; i += 1) {
        const n2 = nums2[i];
        if (!map.has(n2)) {
            continue;
        }
        for (let j = i + 1; j < nums2.length; j += 1) {
            if (nums2[j] > n2) {
                const idx = map.get(n2);
                res[idx] = nums2[j];
                break;
            }
        }
    }
    return res;
};

module.exports = { nextGreaterElement };
