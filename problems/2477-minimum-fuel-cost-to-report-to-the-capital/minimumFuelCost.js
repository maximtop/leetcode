/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
const minimumFuelCost = function (roads, seats) {
    const adjMap = {};
    for (const [src, dest] of roads) {
        (adjMap[src] ??= []).push(dest);
        (adjMap[dest] ??= []).push(src);
    }

    let fuel = 0;
    const dfs = (node, parent) => {
        let passengers = 0;
        for (const child of (adjMap[node] ??= [])) {
            if (child !== parent) {
                const p = dfs(child, node);
                passengers += p;
                fuel += Math.ceil(p / seats);
            }
        }
        return passengers + 1;
    };

    dfs(0, -1);
    return fuel;
};

module.exports = { minimumFuelCost };
