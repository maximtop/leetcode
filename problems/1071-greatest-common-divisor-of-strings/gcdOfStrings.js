/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
    const gcd = (x, y) => {
        if (y === 0) {
            return x;
        }
        return gcd(y, x % y);
    };

    if ((str1 + str2) !== (str2 + str1)) {
        return '';
    }

    const curGcd = gcd(str1.length, str2.length);

    return str1.slice(0, curGcd);
};

module.exports = { gcdOfStrings };
