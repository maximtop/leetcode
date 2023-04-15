/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
    let maxArea = 0;
    const stack = []; // [index, height]
    for (let i = 0; i < heights.length; i += 1) {
        let start = i;
        while (stack.length > 0 && stack.at(-1)[1] > heights[i]) {
            const [index, height] = stack.pop();
            maxArea = Math.max(maxArea, (i - index) * height);
            start = index;
        }
        stack.push([start, heights[i]]);
    }
    for (const [index, height] of stack) {
        maxArea = Math.max(maxArea, (heights.length - index) * height);
    }
    return maxArea;
};

module.exports = { largestRectangleArea };
