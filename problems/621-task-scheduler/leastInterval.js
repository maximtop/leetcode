const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
    const count = {};
    for (let i = 0; i < tasks.length; i += 1) {
        const task = tasks[i];
        count[task] = (count[task] ?? 0) + 1;
    }
    const mpq = new MaxPriorityQueue();
    for (const value of Object.values(count)) {
        mpq.enqueue(value, value);
    }
    const queue = [];
    let time = 0;
    while (!mpq.isEmpty() || queue.length > 0) {
        time += 1;
        if (!mpq.isEmpty()) {
            const { element } = mpq.dequeue();
            if (element - 1 > 0) {
                queue.push([element - 1, time + n]);
            }
        }
        if (queue.length > 0 && queue[0][1] === time) {
            const [nextVal] = queue.shift();
            mpq.enqueue(nextVal, nextVal);
        }
    }
    return time;
};

module.exports = { leastInterval };
