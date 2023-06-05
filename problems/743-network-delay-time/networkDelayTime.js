const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = function (times, n, k) {
    const adjMap = times.reduce((acc, [src]) => {
        acc[src] = [];
        return acc;
    }, {});

    for (let i = 0; i < times.length; i += 1) {
        const [source, dest, time] = times[i];
        adjMap[source].push([dest, time]);
    }

    const minHeap = new MinPriorityQueue();
    minHeap.enqueue([k, 0], 0);
    const visited = new Set();
    let t = 0;
    while (!minHeap.isEmpty()) {
        const [source, time] = minHeap.dequeue().element;
        if (visited.has(source)) {
            continue;
        }
        visited.add(source);
        t = Math.max(t, time);
        if (!adjMap[source]) {
            continue;
        }
        for (const [dest, time2] of adjMap[source]) {
            if (!visited.has(dest)) {
                minHeap.enqueue([dest, time + time2], time + time2);
            }
        }
    }
    if (visited.size === n) {
        return t;
    }
    return -1;
};

module.exports = { networkDelayTime };
