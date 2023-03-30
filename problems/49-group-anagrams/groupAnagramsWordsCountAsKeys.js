/* eslint-disable no-restricted-syntax */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const getKey = (word) => {
        const arr = Array(26).fill(0);
        for (const char of word) {
            arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        return arr.join('-');
    };

    const map = new Map();
    for (let i = 0; i < strs.length; i += 1) {
        const str = strs[i];
        const key = getKey(str);
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }

    return [...map.values()];
};

module.exports = { groupAnagrams };
