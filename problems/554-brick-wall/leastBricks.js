/**
 * @param {number[][]} wall
 * @return {number}
 */
const leastBricks = function (wall) {
    const gaps = new Map();
    for (let row = 0; row < wall.length; row += 1) {
        let gapIndex = 0;
        for (let col = 0; col < wall[row].length - 1; col += 1) {
            gapIndex += wall[row][col];
            gaps.set(gapIndex, (gaps.get(gapIndex) || 0) + 1);
        }
    }

    const max = Math.max(0, ...gaps.values());
    return wall.length - max;
};

module.exports = { leastBricks };
