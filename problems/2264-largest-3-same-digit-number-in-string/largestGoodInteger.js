/**
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = function (num) {
    let counter = [];
    let max = '';
    for (let i = 0; i < num.length; i += 1) {
        if (counter.at(-1) === num[i]) {
            counter.push(num[i]);
        } else {
            counter = [];
            counter.push(num[i]);
        }
        if (counter.length === 3) {
            const newNum = counter.join('');
            if (Number(newNum) > Number(max) || max === '') {
                max = newNum;
            }
        }
    }
    return max;
};

module.exports = { largestGoodInteger };
