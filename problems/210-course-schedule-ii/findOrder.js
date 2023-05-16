/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
    const prereq = {};

    for (let i = 0; i < numCourses; i += 1) {
        prereq[i] = [];
    }

    for (const [crs, pre] of prerequisites) {
        prereq[crs].push(pre);
    }

    const visited = new Set();
    const cycle = new Set();
    const output = [];

    const dfs = (crs) => {
        if (cycle.has(crs)) {
            return false;
        }
        if (visited.has(crs)) {
            return true;
        }

        cycle.add(crs);
        for (const pre of prereq[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        cycle.delete(crs);
        visited.add(crs);
        output.push(crs);
        return true;
    };

    for (let i = 0; i < numCourses; i += 1) {
        if (!dfs(i)) {
            return [];
        }
    }

    return output;
};

module.exports = { findOrder };
