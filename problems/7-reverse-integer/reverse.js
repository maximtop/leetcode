/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const MAX_SAFE_INTEGER = 2 ** 31 - 1;
    const MIN_SAFE_INTEGER = -(2 ** 31);

    let res = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        if (res > Math.trunc(MAX_SAFE_INTEGER / 10)
            || (res === Math.trunc(MAX_SAFE_INTEGER / 10) && digit > MAX_SAFE_INTEGER % 10)) {
            return 0;
        }
        if (res < Math.trunc(MIN_SAFE_INTEGER / 10)
            || (res === Math.trunc(MIN_SAFE_INTEGER / 10) && digit < MIN_SAFE_INTEGER % 10)) {
            return 0;
        }
        res = res * 10 + digit;
    }
    return res;
};

module.exports = { reverse };
