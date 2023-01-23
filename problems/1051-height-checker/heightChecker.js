/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    const sorted = [...heights].sort((a, b) => a - b);

    let counter = 0;
    for (let i = 0; i < heights.length; i += 1) {
        if (heights[i] !== sorted[i]) {
            counter += 1;
        }
    }

    return counter;
};

module.exports = { heightChecker };
