/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i += 1) {
        const n = num[i];
        while (stack.at(-1) > n && k > 0) {
            stack.pop();
            k -= 1;
        }
        stack.push(n);
    }
    while (k > 0) {
        stack.pop();
        k -= 1;
    }

    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    return stack.join('') || '0';
};

module.exports = { removeKdigits };
