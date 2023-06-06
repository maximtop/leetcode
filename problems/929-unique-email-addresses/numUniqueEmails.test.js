const { numUniqueEmails } = require('./numUniqueEmails');

describe('numUniqueEmails', () => {
    it('finds all uniq emails', () => {
        expect(numUniqueEmails(['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'])).toBe(2);
    });
});
