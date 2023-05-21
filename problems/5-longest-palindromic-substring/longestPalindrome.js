/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let res = '';
    let resLen = 0;

    const expandAroundCenter = (l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            const len = r - l + 1;
            if (len > resLen) {
                res = s.substring(l, r + 1);
                resLen = len;
            }
            l -= 1;
            r += 1;
        }
    };

    for (let i = 0; i < s.length; i += 1) {
        expandAroundCenter(i, i); // odd case
        expandAroundCenter(i, i + 1); // even case
    }

    return res;
};

module.exports = { longestPalindrome };
