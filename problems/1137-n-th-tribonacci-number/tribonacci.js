/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 1;
    }

    const trib = (n, n2, n1, n0) => {
        if (n > 0) {
            return trib(n - 1, n2 + n1 + n0, n2, n1);
        }

        return n2;
    };

    return trib(n - 3, 2, 1, 1);
};

module.exports = { tribonacci };
