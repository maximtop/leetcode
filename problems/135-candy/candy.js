/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function (ratings) {
    const arr = Array(ratings.length).fill(1);

    for (let i = 1; i < ratings.length; i += 1) {
        if (ratings[i - 1] < ratings[i]) {
            arr[i] = arr[i - 1] + 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i -= 1) {
        if (ratings[i] > ratings[i + 1]) {
            arr[i] = Math.max(arr[i], arr[i + 1] + 1);
        }
    }

    return arr.reduce((a, b) => a + b);
};

module.exports = { candy };
