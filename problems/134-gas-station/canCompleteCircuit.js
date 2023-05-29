/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
    if (gas.reduce((a, b) => a + b) < cost.reduce((a, b) => a + b)) {
        return -1;
    }

    let total = 0;
    let res = 0;
    for (let i = 0; i < gas.length; i += 1) {
        total += gas[i] - cost[i];
        if (total < 0) {
            total = 0;
            res = i + 1;
        }
    }
    return res;
};

module.exports = { canCompleteCircuit };
