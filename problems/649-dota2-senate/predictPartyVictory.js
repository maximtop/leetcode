/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
    const D = [];
    const R = [];
    for (let i = 0; i < senate.length; i += 1) {
        if (senate[i] === 'R') {
            R.push(i);
        } else {
            D.push(i);
        }
    }
    while (D.length > 0 && R.length > 0) {
        const d = D.shift();
        const r = R.shift();
        if (d < r) {
            D.push(d + senate.length);
        } else {
            R.push(r + senate.length);
        }
    }
    if (D.length > 0) {
        return 'Dire';
    }
    return 'Radiant';
};

module.exports = { predictPartyVictory };
