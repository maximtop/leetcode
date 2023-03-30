const { restoreString } = require('./restoreString');

describe('restoreString', () => {
    it('restores string', () => {
        expect(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])).toBe('leetcode');
    });
});
