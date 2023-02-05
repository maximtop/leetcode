/**
 * @param {string[]} strings
 * @return {string[][]}
 */
const groupStrings = function (strings) {
    const getHash = (str) => {
        const aIdx = 'a'.charCodeAt(0);
        const shift = (str.charCodeAt(0) - aIdx) % 26;
        let iniStr = 'a';
        for (let i = 1; i < str.length; i += 1) {
            const index = (str.charCodeAt(i) - aIdx - shift + 26) % 26;
            iniStr += String.fromCharCode(aIdx + index);
        }
        return iniStr;
    };

    const map = {};
    for (let i = 0; i < strings.length; i += 1) {
        const str = strings[i];
        const hash = getHash(str);
        if (map[hash]) {
            map[hash].push(str);
        } else {
            map[hash] = [str];
        }
    }
    return Object.values(map);
};

module.exports = { groupStrings };
