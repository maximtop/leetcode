/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function (s) {
    let onesSeen = 0;
    let result = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '0') {
            result = Math.min(result + 1, onesSeen);
        } else {
            onesSeen += 1;
        }
    }
    return result;
};

module.exports = { minFlipsMonoIncr };
