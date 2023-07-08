/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
    const answer = [[], []];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    for (const n1 of set1) {
        if (!set2.has(n1)) {
            answer[0].push(n1);
        }
    }
    for (const n2 of set2) {
        if (!set1.has(n2)) {
            answer[1].push(n2);
        }
    }
    return answer;
};

module.exports = { findDifference };
