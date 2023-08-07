/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i += 1) {
        res.push(fn(arr[i], i));
    }
    return res;
};

module.exports = { map };
