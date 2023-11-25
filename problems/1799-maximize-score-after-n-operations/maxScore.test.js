const { maxScore } = require('./maxScore');

describe('maxScore', () => {
    it('finds max score', () => {
        expect(maxScore([1, 2])).toBe(1);
        expect(maxScore([3, 4, 6, 8])).toBe(11);
    });
});
