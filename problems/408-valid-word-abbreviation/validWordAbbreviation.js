/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = function (word, abbr) {
    let l = 0;
    let r = 0;
    const temp = [];
    const isLetter = (c) => {
        return c.toLowerCase() !== c.toUpperCase();
    };
    while (l < abbr.length && r < abbr.length) {
        if (isLetter(abbr[l])) {
            temp.push(abbr[l]);
            l += 1;
            r += 1;
        } else {
            if (abbr[l] === '0') {
                return false;
            }
            while (r < abbr.length && !isLetter(abbr[r])) {
                r += 1;
            }
            const num = Number.parseInt(abbr.slice(l, r), 10);
            for (let i = 0; i < num; i += 1) {
                temp.push('.');
                if (temp.length > word.length) {
                    return false;
                }
            }
            l = r;
        }
    }
    if (word.length !== temp.length) {
        return false;
    }
    for (let i = 0; i < word.length; i += 1) {
        if (temp[i] !== '.' && temp[i] !== word[i]) {
            return false;
        }
    }
    return true;
};

module.exports = { validWordAbbreviation };
