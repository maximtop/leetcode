/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    const res = [];
    const part = [];

    if (!digits.length) {
        return res;
    }

    const dfs = (i) => {
        if (i >= digits.length) {
            res.push(part.join(''));
            return;
        }
        const letters = map[digits[i]];
        for (let l = 0; l < letters.length; l += 1) {
            part.push(letters[l]);
            dfs(i + 1);
            part.pop();
        }
    };

    dfs(0);

    return res;
};

module.exports = { letterCombinations };
