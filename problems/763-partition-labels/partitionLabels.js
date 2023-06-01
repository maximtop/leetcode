/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function(s) {
    const lastIndex = {};
    for (let i = 0; i < s.length; i += 1) {
        lastIndex[s[i]] = i;
    }

    let res = [];
    let end = 0;
    let size = 0;
    for (let i = 0; i < s.length; i += 1) {
        const ch = s[i];
        end = Math.max(lastIndex[ch], end);
        size += 1;
        if (i === end) {
            res.push(size);
            size = 0;
        }
    }
    return res;
};

module.exports = { partitionLabels };
