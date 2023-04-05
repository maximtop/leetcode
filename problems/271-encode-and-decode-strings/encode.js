/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = function (strs) {
    return strs.map((str) => {
        return `${str.length}#${str}`;
    }).join('');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = function (s) {
    const result = [];
    let i = 0;
    while (i < s.length) {
        let lenStr = '';
        while (i < s.length && s[i] !== '#') {
            lenStr += s[i];
            i += 1;
        }
        i += 1; // to skip #
        const len = Number.parseInt(lenStr, 10);
        const end = i + len;
        let word = '';
        while (i < s.length && i < end) {
            word += s[i];
            i += 1;
        }
        result.push(word);
    }
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

module.exports = { encode, decode };
