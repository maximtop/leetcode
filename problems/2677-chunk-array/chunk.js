/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = function (arr, size) {
    const res = [];
    let temp = [];
    let i = 0;
    while (i < arr.length) {
        temp.push(arr[i]);
        if (temp.length === size) {
            res.push(temp);
            temp = [];
        }
        i += 1;
    }
    if (temp.length > 0) {
        res.push(temp);
    }
    return res;
};

module.exports = { chunk };
