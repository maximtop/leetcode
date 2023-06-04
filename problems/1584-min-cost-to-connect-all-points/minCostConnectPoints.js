const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = function (points) {
    const adjMap = points.reduce((acc, _, i) => {
        acc[i] = [];
        return acc;
    }, {});

    for (let i = 0; i < points.length; i += 1) {
        const [x1, y1] = points[i];
        for (let j = i + 1; j < points.length; j += 1) {
            const [x2, y2] = points[j];
            const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            adjMap[i].push([dist, j]);
            adjMap[j].push([dist, i]);
        }
    }

    let res = 0;
    const visited = new Set();
    const mpq = new MinPriorityQueue();
    mpq.enqueue([0, 0], 0);
    while (visited.size < points.length) {
        const [cost, i] = mpq.dequeue().element;
        if (visited.has(i)) {
            continue;
        }
        res += cost;
        visited.add(i);
        for (const [neighCost, neigh] of adjMap[i]) {
            if (!visited.has(neigh)) {
                mpq.enqueue([neighCost, neigh], neighCost);
            }
        }
    }
    return res;
};

module.exports = { minCostConnectPoints };
