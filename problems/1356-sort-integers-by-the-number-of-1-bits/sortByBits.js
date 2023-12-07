/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
    const countBytes = (n) => {
        let count = 0;
        while (n) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };
    const sortedArr = arr.sort((a, b) => {
        const bytesA = countBytes(a);
        const bytesB = countBytes(b);
        if (bytesA > bytesB) {
            return 1;
        }

        if (bytesA < bytesB) {
            return -1;
        }

        return a - b;
    });
    return sortedArr;
};

module.exports = { sortByBits };
