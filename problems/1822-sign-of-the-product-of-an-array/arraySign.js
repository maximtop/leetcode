/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
    const res = nums.reduce((acc, el) => {
        if (el === 0) {
            return 0;
        }
        if (el < 0) {
            return acc * -1;
        }
        return acc;
    }, 1);
    return res;
};

module.exports = { arraySign };
