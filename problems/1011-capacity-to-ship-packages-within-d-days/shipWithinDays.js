/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
    let min = Math.max(...weights);
    let max = weights.reduce((a, b) => a + b);

    const isPossibleCapacity = (cap) => {
        let curLoad = 0;
        let ships = days;
        for (let i = 0; i < weights.length; i += 1) {
            if (curLoad + weights[i] > cap) {
                curLoad = 0;
                ships -= 1;
            }
            curLoad += weights[i];
        }
        if (curLoad > 0) {
            ships -= 1;
        }
        return ships >= 0;
    };

    let result = max;
    while (min <= max) {
        const mid = min + Math.floor((max - min) / 2);
        if (isPossibleCapacity(mid)) {
            result = Math.min(result, mid);
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return result;
};

module.exports = { shipWithinDays };
