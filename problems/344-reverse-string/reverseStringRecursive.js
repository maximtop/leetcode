/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
    const helper = (s, left, right) => {
        if (left >= right) {
            return;
        }

        const temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        helper(s, left + 1, right - 1);
    };

    helper(s, 0, s.length - 1);
};

module.exports = { reverseString };
