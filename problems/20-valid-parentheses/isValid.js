/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];
    const brackets = {
        '{': '}',
        '(': ')',
        '[': ']',
    };
    const closing = Object.values(brackets);

    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        if (brackets[char]) {
            stack.push(char);
            // eslint-disable-next-line no-continue
            continue;
        }

        if (closing.includes(char)) {
            const top = stack.pop();
            if (brackets[top] !== char) {
                return false;
            }
        }
    }

    return !(stack.length > 0);
};

module.exports = { isValid };
