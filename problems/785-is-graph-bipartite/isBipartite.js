/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function (graph) {
    const sets = Array(graph.length).fill(0);
    const bfs = (i) => {
        if (sets[i]) {
            return true;
        }
        const queue = [i];
        sets[i] = -1;
        while (queue.length) {
            const n = queue.shift();
            for (const neighbor of graph[n]) {
                if (sets[neighbor] && sets[neighbor] === sets[n]) {
                    return false;
                }
                if (!sets[neighbor]) {
                    sets[neighbor] = -1 * sets[n];
                    queue.push(neighbor);
                }
            }
        }
        return true;
    };
    for (let i = 0; i < graph.length; i += 1) {
        if (!bfs(i)) {
            return false;
        }
    }
    return true;
};

module.exports = { isBipartite };
