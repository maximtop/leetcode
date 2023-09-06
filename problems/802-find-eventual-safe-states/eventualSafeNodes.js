/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
    const res = [];
    const safe = {};

    const dfs = (i) => {
        if (i in safe) {
            return safe[i];
        }
        safe[i] = false;
        for (const neighbor of graph[i]) {
            if (!dfs(neighbor)) {
                return safe[i];
            }
        }
        safe[i] = true;
        return safe[i];
    };

    for (let i = 0; i < graph.length; i += 1) {
        if (dfs(i)) {
            res.push(i);
        }
    }

    return res;
};

module.exports = { eventualSafeNodes };
