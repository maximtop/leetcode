/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const chars = s.split('');
    const vowelsChars = chars.filter((char) => vowels.has(char.toLowerCase()));
    for (let i = 0; i < chars.length; i += 1) {
        if (vowels.has(chars[i].toLowerCase())) {
            chars[i] = vowelsChars.pop();
        }
    }
    return chars.join('');
};

module.exports = { reverseVowels };
