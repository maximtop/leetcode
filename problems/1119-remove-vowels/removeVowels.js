/**
 * @param {string} s
 * @return {string}
 */
const removeVowels = (s) => {
    const vowels = 'aeiou';
    return s.split('')
        .filter((char) => !vowels.includes(char))
        .join('');
};

module.exports = { removeVowels };
