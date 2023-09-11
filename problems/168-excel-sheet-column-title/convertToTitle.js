/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
    const res = [];
    while (columnNumber > 0) {
        const offset = (columnNumber - 1) % 26;
        res.push(String.fromCharCode('A'.charCodeAt(0) + offset));
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return res.reverse().join('');
};

module.exports = { convertToTitle };
