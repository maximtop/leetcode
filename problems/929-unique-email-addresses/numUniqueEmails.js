/* eslint-disable prefer-const,prefer-destructuring */
/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
    const uniq = new Set();
    for (const email of emails) {
        let [local, domain] = email.split('@');
        local = local.split('+')[0];
        local = local.replaceAll('.', '');
        uniq.add(`${local}@${domain}`);
    }
    return uniq.size;
};

module.exports = { numUniqueEmails };
