/**
 * @param {string} s
 * @return {number}
 */
const maxProduct = function (s) {
    const l = s.length;
    const map = {};
    for (let mask = 1; mask < (1 << l); mask += 1) {
        const subseq = [];
        for (let i = 0; i < l; i += 1) {
            if ((1 << i) & mask) {
                subseq.push(s[i]);
            }
        }
        const subseqStr = subseq.join('');
        const reversed = subseq.reverse().join('');
        if (reversed === subseqStr) {
            map[mask] = subseqStr.length;
        }
    }
    let res = 0;
    for (const m1 of Object.keys(map)) {
        for (const m2 of Object.keys(map)) {
            if ((m1 & m2) === 0) {
                res = Math.max(res, map[m1] * map[m2]);
            }
        }
    }
    return res;
};

module.exports = { maxProduct };
