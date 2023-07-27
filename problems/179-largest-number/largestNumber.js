/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
    let largest = nums.map((n) => n.toString()).sort((a, b) => {
        if (a + b > b + a) {
            return -1;
        }
        return 1;
    }).join('');

    while (largest.length > 1 && largest[0] === '0') {
        largest = largest.substring(1);
    }

    return largest;
};

module.exports = { largestNumber };
