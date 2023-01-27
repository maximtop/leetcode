/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let result = 0;
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (map[num]) {
            result -= num;
        } else {
            result += num;
            map[num] = true;
        }
    }

    return result;
};

module.exports = { singleNumber };
