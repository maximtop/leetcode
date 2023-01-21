/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
    const map = {};
    for (let i = 0; i < arr.length; i += 1) {
        const num = arr[i];
        if (map[num * 2]) {
            return true;
        }
        if (num % 2 === 0 && map[num / 2]) {
            return true;
        }
        map[num] = true;
    }

    return false;
};

module.exports = { checkIfExist };
