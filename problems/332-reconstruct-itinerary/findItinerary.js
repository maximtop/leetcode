/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function (tickets) {
    const adjMap = {};
    const sortedTickets = tickets.sort(([srcA, destA], [srcB, destB]) => {
        if (srcA > srcB) {
            return 1;
        }
        if (srcA < srcB) {
            return -1;
        }
        if (destA > destB) {
            return 1;
        }
        if (destA < destB) {
            return -1;
        }

        return 0;
    });

    for (let i = 0; i < sortedTickets.length; i += 1) {
        const [src, dest] = sortedTickets[i];
        if (adjMap[src]) {
            adjMap[src].push(dest);
        } else {
            adjMap[src] = [dest];
        }
    }

    const res = ['JFK'];
    const dfs = (src) => {
        if (res.length === tickets.length + 1) {
            return true;
        }
        if (!adjMap[src]) {
            return false;
        }

        const temp = [...adjMap[src]];
        for (let i = 0; i < temp.length; i += 1) {
            const v = adjMap[src][i];
            adjMap[src].splice(i, 1);
            res.push(v);
            if (dfs(v)) {
                return true;
            }
            res.pop();
            adjMap[src].splice(i, 0, v);
        }
        return false;
    };
    dfs('JFK');
    return res;
};

module.exports = { findItinerary };
