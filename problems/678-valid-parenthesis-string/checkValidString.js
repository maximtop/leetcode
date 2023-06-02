/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;
    for (let i = 0; i < s.length; i += 1) {
        const ch = s[i];
        if (ch === '(') {
            leftMin += 1;
            leftMax += 1;
        } else if (ch === ')') {
            leftMin -= 1;
            leftMax -= 1;
        } else {
            leftMin -= 1;
            leftMax += 1;
        }
        if (leftMax < 0) {
            return false;
        }
        if (leftMin < 0) {
            leftMin = 0;
        }
    }
    return leftMin === 0;
};

module.exports = { checkValidString };
