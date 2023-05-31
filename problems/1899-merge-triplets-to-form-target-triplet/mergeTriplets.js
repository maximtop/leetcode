/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
const mergeTriplets = function (triplets, target) {
    const good = new Set();
    for (const triptlet of triplets) {
        if (triptlet[0] > target[0] || triptlet[1] > target[1] || triptlet[2] > target[2]) {
            continue;
        }
        for (let i = 0; i < triptlet.length; i += 1) {
            if (triptlet[i] === target[i]) {
                good.add(i);
            }
        }
    }
    return good.size === 3;
};

module.exports = { mergeTriplets };
