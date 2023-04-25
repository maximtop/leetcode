const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
    const mpq = new MinPriorityQueue();
    for (let i = 0; i < points.length; i += 1) {
        const [x, y] = points[i];
        const distance = x ** 2 + y ** 2;
        mpq.enqueue([x, y], distance);
    }

    const res = [];
    while (k > 0) {
        res.push(mpq.dequeue().element);
        k -= 1;
    }
    return res;
};

module.exports = { kClosest };
