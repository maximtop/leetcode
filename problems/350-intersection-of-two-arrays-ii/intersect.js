/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const map = {};
    for (let i = 0; i < nums1.length; i += 1) {
        const char = nums1[i];
        if (map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    }

    const resultArr = [];
    for (let i = 0; i < nums2.length; i += 1) {
        const char = nums2[i];
        if (map[char] && map[char] > 0) {
            resultArr.push(char);
            map[char] -= 1;
        }
    }

    return resultArr;
};

module.exports = { intersect };
