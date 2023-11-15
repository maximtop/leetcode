/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = function (arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    if (sortedArr[0] !== 1) {
        sortedArr[0] = 1;
    }
    for (let i = 1; i < sortedArr.length; i += 1) {
        sortedArr[i] = Math.min(sortedArr[i - 1] + 1, sortedArr[i]);
    }
    return sortedArr.at(-1);
};

module.exports = { maximumElementAfterDecrementingAndRearranging };
