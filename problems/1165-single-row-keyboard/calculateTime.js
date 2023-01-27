/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = function (keyboard, word) {
    const map = {};
    for (let i = 0; i < keyboard.length; i += 1) {
        map[keyboard[i]] = i;
    }
    let prevIndex = map[keyboard[0]];
    let sum = 0;
    for (let i = 0; i < word.length; i += 1) {
        const currIndex = map[word[i]];
        sum += Math.abs(prevIndex - currIndex);
        prevIndex = currIndex;
    }
    return sum;
};

module.exports = { calculateTime };
