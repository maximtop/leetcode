/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
    const removeDots = (email) => {
        const [part1, part2] = email.split('@');
        const [part1] = part1.split('+');

    }
};

module.exports = { numUniqueEmails };
