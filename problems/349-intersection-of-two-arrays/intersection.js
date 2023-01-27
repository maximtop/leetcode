/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const map = {};
    for (let i = 0; i < nums1.length; i += 1) {
        map[nums1[i]] = true;
    }
    const result = [];
    for (let i = 0; i < nums2.length; i += 1) {
        const num = nums2[i];
        if (map[num]) {
            result.push(num);
            delete map[num];
        }
    }
    return result;
};

module.exports = { intersection };
