/* eslint-disable no-param-reassign */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i -= 1) {
        const curr = arr[i];
        arr[i] = max;
        if (curr > max) {
            max = curr;
        }
    }
    return arr;
};

module.exports = { replaceElements };
