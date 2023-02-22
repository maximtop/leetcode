/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let common = strs[0];
    for (let i = 1; i < strs.length; i += 1) {
        const str = strs[i];
        const len = str.length > common.length ? str.length : common.length;
        for (let j = 0; j < len; j += 1) {
            if (common[j] !== str[j]) {
                common = common.slice(0, j);
                break;
            }
        }
        if (common.length === 0) {
            return '';
        }
    }
    return common;
};

module.exports = { longestCommonPrefix };
