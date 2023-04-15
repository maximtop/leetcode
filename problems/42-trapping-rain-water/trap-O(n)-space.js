/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    const leftMaxArr = [];
    const rightMaxArr = [];
    const minArr = [];

    let leftMax = 0;
    for (let i = 0; i < height.length; i += 1) {
        leftMaxArr[i] = leftMax;
        leftMax = Math.max(leftMax, height[i]);
    }

    let rightMax = 0;
    for (let i = height.length - 1; i >= 0; i -= 1) {
        rightMaxArr[i] = rightMax;
        rightMax = Math.max(rightMax, height[i]);
    }

    for (let i = 0; i < height.length; i += 1) {
        minArr[i] = Math.min(leftMaxArr[i], rightMaxArr[i]);
    }

    let res = 0;
    for (let i = 0; i < height.length; i += 1) {
        const trappedWater = minArr[i] - height[i];
        if (trappedWater > 0) {
            res += trappedWater;
        }
    }

    return res;
};

module.exports = { trap };
