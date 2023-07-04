/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
    const stack = [];

    const findClosing = (s, startIdx) => {
        const stack = [];
        for (let i = startIdx; i < s.length; i += 1) {
            if (s[i] === '[') {
                stack.push('[');
            } else if (s[i] === ']') {
                if (stack.length === 1) {
                    return i;
                }
                stack.pop();
            }
        }
        return -1;
    };

    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === '[') {
            const closingIdx = findClosing(s, i);
            const innerS = s.substring(i + 1, closingIdx);
            const decodedInnerS = decodeString(innerS);
            let numStr = '';
            while (/\d/.test(stack.at(-1))) {
                numStr = `${stack.pop()}${numStr}`;
            }
            const multipliedS = Array(Number(numStr)).fill(decodedInnerS).join('');
            stack.push(multipliedS);
            i = closingIdx;
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

module.exports = { decodeString };
