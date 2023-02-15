/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
    const numStr = num.join('');
    const sum = BigInt(numStr) + BigInt(k);
    const sumStr = sum.toString();
    return sumStr.split('').map((str) => Number.parseInt(str, 10));
};

module.exports = { addToArrayForm };
