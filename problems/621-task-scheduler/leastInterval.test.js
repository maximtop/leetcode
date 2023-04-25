const { leastInterval } = require('./leastInterval');

describe('leastInterval', () => {
    it('finds least interval', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);
    });
});
