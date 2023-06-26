/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function (arr, k, threshold) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (i < k) {
            sum += arr[i];
        } else {
            if (sum / k >= threshold) {
                count += 1;
            }
            sum = sum - arr[i - k] + arr[i];
        }
    }
    if (sum / k >= threshold) {
        count += 1;
    }
    return count;
};

module.exports = { numOfSubarrays };
