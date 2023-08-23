/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
const numOfMinutes = function (n, headID, manager, informTime) {
    const adjMap = {};
    for (let i = 0; i < n; i += 1) {
        if (adjMap[manager[i]]) {
            adjMap[manager[i]].push(i);
        } else {
            adjMap[manager[i]] = [i];
        }
    }
    const queue = [[headID, 0]]; // id, time
    let res = 0;
    while (queue.length > 0) {
        const [i, time] = queue.shift();
        res = Math.max(res, time);
        const employees = adjMap[i];
        if (!employees) {
            continue;
        }
        for (const emp of adjMap[i]) {
            queue.push([emp, time + informTime[i]]);
        }
    }
    return res;
};

module.exports = { numOfMinutes };
