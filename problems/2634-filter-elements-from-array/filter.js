/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    }
    return res;
};

module.exports = { filter };
