const { removeDuplicates } = require('./removeDuplicates');

describe('removeDuplicate', () => {
    it('removes k consecutive duplicates', () => {
        expect(removeDuplicates('abcd', 2)).toBe('abcd');
        expect(removeDuplicates('deeedbbcccbdaa', 3)).toBe('aa');
    });
});
