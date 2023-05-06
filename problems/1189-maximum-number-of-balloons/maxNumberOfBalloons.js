/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function (text) {
    const ratioMap = new Map();
    for (const char of 'balloon') {
        ratioMap.set(char, (ratioMap.get(char) || 0) + 1);
    }

    const map = new Map();
    for (const key of ratioMap.keys()) {
        map.set(key, 0);
    }

    for (let i = 0; i < text.length; i += 1) {
        if (map.has(text[i])) {
            map.set(text[i], map.get(text[i]) + 1);
        }
    }

    let min = text.length;
    for (const key of 'balloon') {
        const val = Math.floor(map.get(key) / ratioMap.get(key));
        min = Math.min(val, min);
    }

    return min;
};

module.exports = { maxNumberOfBalloons };
