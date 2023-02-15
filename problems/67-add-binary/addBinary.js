/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
    if (b.length > a.length) {
        return addBinary(b, a);
    }

    let carry = 0;
    let j = b.length - 1;
    let result = [];
    for (let i = a.length - 1; i > -1; i -= 1) {
        if (a[i] === '1') {
            carry += 1;
        }
        if (j > -1) {
            if (b[j] === '1') {
                carry += 1;
            }
            j -= 1;
        }
        if (carry % 2 === 1) {
            result.unshift('1');
        } else {
            result.unshift('0');
        }
        carry = Math.floor(carry / 2);
    }
    if (carry === 1) {
        result.unshift('1');
    }

    result = result.join('');

    return result;
};

module.exports = { addBinary };
