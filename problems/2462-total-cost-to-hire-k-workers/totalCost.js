const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
const totalCost = function (costs, k, candidates) {
    const leftMPQ = new MinPriorityQueue();
    const rightMPQ = new MinPriorityQueue();

    const fillQueues = () => {
        while (leftMPQ.size() < candidates || rightMPQ.size() < candidates) {
            if (costs.length <= 0) {
                return;
            }
            if (costs.length > 0 && leftMPQ.size() < candidates) {
                const left = costs.shift();
                leftMPQ.enqueue(left, left);
            }
            if (costs.length > 0 && rightMPQ.size() < candidates) {
                const right = costs.pop();
                rightMPQ.enqueue(right, right);
            }
        }
    };

    let totalCost = 0;
    for (let i = 0; i < k; i += 1) {
        fillQueues();
        let workerCost;
        if (leftMPQ.size() && rightMPQ.size()) {
            if (leftMPQ.front().element <= rightMPQ.front().element) {
                const { element } = leftMPQ.dequeue();
                workerCost = element;
            } else {
                const { element } = rightMPQ.dequeue();
                workerCost = element;
            }
        } else if (leftMPQ.size()) {
            const { element } = leftMPQ.dequeue();
            workerCost = element;
        } else {
            const { element } = rightMPQ.dequeue();
            workerCost = element;
        }
        totalCost += workerCost;
    }
    return totalCost;
};

module.exports = { totalCost };
