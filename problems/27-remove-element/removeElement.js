const removeIdx = (nums, idx = -1) => {
    if (idx >= nums.length || idx < 0) {
        return nums;
    }

    for (let i = idx; i < nums.length - 1; i += 1) {
        // eslint-disable-next-line no-param-reassign
        nums[i] = nums[i + 1];
    }

    return nums;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    // eslint-disable-next-line prefer-destructuring
    let length = nums.length;
    for (let i = 0; i <= length; i += 1) {
        if (nums[i] === val) {
            removeIdx(nums, i);
            length -= 1;

            if (i < length) {
                i -= 1;
            }
        }
    }

    return length;
};

module.exports = { removeElement, removeIdx };
