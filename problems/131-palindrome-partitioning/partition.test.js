const { partition } = require('./partition');

describe('partition', () => {
    it('finds all possible palindromes in the string', () => {
        expect(partition('aab')).toEqual([['a', 'a', 'b'], ['aa', 'b']]);
    });
});
