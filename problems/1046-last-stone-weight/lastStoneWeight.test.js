const { lastStoneWeight } = require('./lastStoneWeight');

describe('lastStoneWeight', () => {
    it('works', () => {
        expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
        expect(lastStoneWeight([2, 2])).toBe(0);
    });
});
