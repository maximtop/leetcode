const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    const mpq = new MaxPriorityQueue();
    for (let i = 0; i < nums.length; i += 1) {
        mpq.enqueue(nums[i]);
    }
    let res;
    for (let i = 0; i < k; i += 1) {
        res = mpq.dequeue();
    }
    return res;
};

module.exports = { findKthLargest };
