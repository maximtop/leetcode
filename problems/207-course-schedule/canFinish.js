/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
    const preMap = {};

    for (let crs = 0; crs < numCourses; crs += 1) {
        preMap[crs] = [];
    }

    for (const [crs, pre] of prerequisites) {
        preMap[crs].push(pre);
    }

    const visited = new Set();

    const dfs = (crs) => {
        if (visited.has(crs)) {
            return false;
        }
        if (preMap[crs].length === 0) {
            return true;
        }
        visited.add(crs);
        for (const pre of preMap[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visited.delete(crs);
        preMap[crs] = [];
        return true;
    };

    for (let crs = 0; crs < numCourses; crs += 1) {
        if (!dfs(crs)) {
            return false;
        }
    }

    return true;
};

module.exports = { canFinish };
