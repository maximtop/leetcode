/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    let counter = 0;
    const expandAroundCenter = (l, r) => {
        let counter = 0;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            counter += 1;
            l -= 1;
            r += 1;
        }
        return counter;
    };
    for (let i = 0; i < s.length; i += 1) {
        // odd cases
        counter += expandAroundCenter(i, i);
        // even cases
        counter += expandAroundCenter(i, i + 1);
    }
    return counter;
};

module.exports = { countSubstrings };
