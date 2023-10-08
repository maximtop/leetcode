/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
    const map = {};
    for (let i = 0; i < arr.length; i += 1) {
        const num = arr[i];
        if (!map[num]) {
            map[num] = 0;
        }
        map[num] += 1;
    }
    const values = Object.values(map);
    const set = new Set(values);
    return set.size === values.length;
};

module.exports = { uniqueOccurrences };
