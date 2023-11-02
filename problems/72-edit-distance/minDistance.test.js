const { minDistance } = require('./minDistance');

describe('minDistance', () => {
    it('finds edit distance', () => {
        expect(minDistance('abc', 'adc')).toBe(1);
        expect(minDistance('horse', 'ros')).toBe(3);
    });
});
