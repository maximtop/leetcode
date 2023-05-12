const { orangesRotting } = require('./orangesRotting');

describe('orangesRotting', () => {
    it('calculates time', () => {
        const grid = [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
        ];
        expect(orangesRotting(grid)).toBe(4);
    });
});
