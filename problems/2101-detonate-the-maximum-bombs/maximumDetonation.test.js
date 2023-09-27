const { maximumDetonation } = require('./maximumDetonation');

describe('maximumDetonation', () => {
    it('finds maximum possible bombs to burst', () => {
        const bombs = [[2, 1, 3], [6, 1, 4]];
        expect(maximumDetonation(bombs)).toBe(2);
    });
});
