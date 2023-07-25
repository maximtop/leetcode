/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
    const sCount = {};
    const pCount = {};
    for (const char of p) {
        pCount[char] = (pCount[char] || 0) + 1;
    }
    let l = 0;
    const res = [];
    for (let r = 0; r < s.length; r += 1) {
        const rChar = s[r];
        sCount[rChar] = (sCount[rChar] || 0) + 1;
        if (r >= p.length - 1) {
            let found = true;
            for (const char in pCount) {
                if (pCount[char] !== sCount[char]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                res.push(l);
            }
            const lChar = s[l];
            sCount[lChar] -= 1;
            if (sCount[lChar] === 0) {
                delete sCount[lChar];
            }
            l += 1;
        }
    }
    return res;
};

module.exports = { findAnagrams };
