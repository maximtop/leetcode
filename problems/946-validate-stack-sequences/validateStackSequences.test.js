const { validateStackSequences } = require('./validateStackSequences');

describe('validateStackSequences', () => {
    it('validates if operations are valid', () => {
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
    });
});
