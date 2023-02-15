/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
    let count = Math.floor((high - low) / 2);
    if (low % 2 === 1) {
        count += 1;
    }
    if ((count <= 2 && high !== low) && high % 2 === 1) {
        count += 1;
    }

    return count;
};

module.exports = { countOdds };
