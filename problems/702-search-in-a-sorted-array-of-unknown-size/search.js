/* eslint-disable no-bitwise */
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
const search = function (reader, target) {
    if (reader.get(0) === target) {
        return 0;
    }
    let left = 0;
    let right = 1;
    while (reader.get(right) < target) {
        left = right;
        right *= 2;
    }
    while (left <= right) {
        const pivot = left + Math.abs((right - left) / 2);
        const num = reader.get(pivot);
        if (num === target) {
            return pivot;
        }
        if (num < target) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return -1;
};

const searchWithBitwise = (reader, target) => {
    if (reader.get(0) === target) {
        return 0;
    }
    let left = 0;
    let right = 1;
    while (reader.get(right) < target) {
        left = right;
        right <<= 1;
    }
    while (left <= right) {
        const pivot = left + (right - left) >> 1;
        const num = reader.get(pivot);
        if (num === target) {
            return pivot;
        }
        if (num < target) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return -1;
};

module.exports = { search, searchWithBitwise };
