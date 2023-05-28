const { canJump } = require('./canJump');

describe('canJump', () => {
    it('detects if end index can be reached', () => {
        expect(canJump([2, 3, 1, 1, 4])).toBe(true);
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });
});
