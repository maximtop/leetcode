const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
    this.k = k;
    this.mpq = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i += 1) {
        this.mpq.enqueue(nums[i]);
    }

    while (this.mpq.size() > this.k) {
        this.mpq.dequeue();
    }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.mpq.enqueue(val);
    while (this.mpq.size() > this.k) {
        this.mpq.dequeue(); // remove the smallest
    }

    return this.mpq.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

module.exports = { KthLargest };
