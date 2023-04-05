/**
 * @param {string[]} strs
 * @return {number}
 */
const maximumValue = function (strs) {
    let max = 0;
    for (let i = 0; i < strs.length; i += 1) {
        const str = strs[i];
        let len;
        // TODO find better way, Number.isNaN works differently for strings like "alic3"
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(str)) {
            len = str.length;
        } else {
            len = Number(str);
        }
        max = Math.max(max, len);
    }
    return max;
};

module.exports = { maximumValue };
