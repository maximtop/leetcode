const { lengthOfLastWord } = require('./lengthOfLastWord');

describe('lengthOfLastWord', () => {
    it('works', () => {
        expect(lengthOfLastWord('here maxim')).toBe(5);
    });
});
