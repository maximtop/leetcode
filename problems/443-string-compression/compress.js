/* eslint-disable no-param-reassign,no-plusplus */
/**
 * @param {string[]} chars
 * @return {number}
 */
const compress = function (chars) {
    let prevChar = chars[0];
    let counter = 1;
    let pointer = 0;
    for (let i = 1; i < chars.length; i += 1) {
        const currChar = chars[i];
        if (prevChar !== currChar) {
            if (counter > 1) {
                chars[pointer++] = prevChar;
                const strCounter = String(counter);
                for (let j = 0; j < strCounter.length; j += 1) {
                    chars[pointer++] = strCounter[j];
                }
            } else {
                chars[pointer++] = prevChar;
            }
            counter = 1;
            prevChar = currChar;
        } else {
            counter += 1;
        }
    }
    if (counter > 1) {
        chars[pointer++] = prevChar;
        const strCounter = String(counter);
        for (let i = 0; i < strCounter.length; i += 1) {
            chars[pointer++] = strCounter[i];
        }
    } else {
        chars[pointer++] = prevChar;
    }

    return pointer;
};

module.exports = { compress };
