const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const maxScore = function (nums1, nums2, k) {
    let pairs = nums1.map((el, idx) => [el, nums2[idx]]);
    pairs = pairs.sort((a, b) => b[1] - a[1]);

    const minHeap = new MinPriorityQueue();
    let n1Sum = 0;
    let res = 0;
    for (const [n1, n2] of pairs) {
        n1Sum += n1;
        minHeap.enqueue(n1, n1);
        if (minHeap.size() > k) {
            const { element: n1Pop } = minHeap.dequeue();
            n1Sum -= n1Pop;
        }
        if (minHeap.size() === k) {
            res = Math.max(res, n1Sum * n2);
        }
    }
    return res;
};

module.exports = { maxScore };
