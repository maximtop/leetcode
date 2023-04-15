/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    let start = 0;
    let end = matrix.length - 1;
    let targetRow;
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const midRow = matrix[mid];
        if (target < midRow.at(0)) {
            end = mid - 1;
        } else if (target > midRow.at(-1)) {
            start = mid + 1;
        } else {
            targetRow = midRow;
            break;
        }
    }
    if (!targetRow) {
        return false;
    }
    start = 0;
    end = targetRow.length - 1;
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (targetRow[mid] === target) {
            return true;
        }
        if (targetRow[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};

module.exports = { searchMatrix };
