/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
const closestMeetingNode = function (edges, node1, node2) {
    const adjMap = {};
    for (let i = 0; i < edges.length; i += 1) {
        (adjMap[i] ??= []).push(edges[i]);
    }

    const bfs = (node, distMap) => {
        const queue = [[node, 0]];
        distMap[node] = 0;
        while (queue.length) {
            const [dst, dist] = queue.shift();
            if (!adjMap[dst]) {
                continue;
            }
            for (const neighbor of adjMap[dst]) {
                if (!(neighbor in distMap)) {
                    queue.push([neighbor, dist + 1]);
                    distMap[neighbor] = dist + 1;
                }
            }
        }
    };

    const distMap1 = {};
    const distMap2 = {};

    bfs(node1, distMap1);
    bfs(node2, distMap2);

    let res = -1;
    let minDist = Number.MAX_VALUE;

    for (let i = 0; i < edges.length; i += 1) {
        if (i in distMap1 && i in distMap2) {
            const dist = Math.max(distMap1[i], distMap2[i]);
            if (dist < minDist) {
                minDist = dist;
                res = i;
            }
        }
    }

    return res;
};

module.exports = { closestMeetingNode };
