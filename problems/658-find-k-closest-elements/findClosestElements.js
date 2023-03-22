/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
    let left = 0;
    // use -k, because it is the last legit number to get k elements from array
    let right = arr.length - k;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    const result = [];
    for (let i = left; i < left + k; i += 1) {
        result.push(arr[i]);
    }

    return result;
};

module.exports = { findClosestElements };
