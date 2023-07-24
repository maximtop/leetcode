/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const interchangeableRectangles = function (rectangles) {
    const map = {};
    for (const [w, h] of rectangles) {
        map[w / h] = 1 + (map[w / h] || 0);
    }
    let res = 0;
    for (const values of Object.values(map)) {
        if (values > 1) {
            res += Math.floor((values * (values - 1)) / 2);
        }
    }
    return res;
};

module.exports = { interchangeableRectangles };
