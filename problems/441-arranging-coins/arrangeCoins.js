/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
    let l = 1;
    let r = n;
    let res = l;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        const coins = (mid / 2) * (mid + 1);
        if (coins > n) {
            r = mid - 1;
        } else {
            l = mid + 1;
            res = Math.max(res, mid);
        }
    }
    return res;
};

module.exports = { arrangeCoins };
