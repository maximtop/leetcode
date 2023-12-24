/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function (num) {
    const nums = String(num).split('').sort();
    return Number(`${nums[0]}${nums[2]}`) + Number(`${nums[1]}${nums[3]}`);
};

module.exports = { minimumSum };
