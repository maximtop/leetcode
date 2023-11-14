const { mostPoints } = require('./mostPoints');

describe('mostPoints', () => {
    it('calculates what most possible points it is possible to get', () => {
        expect(mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]])).toBe(5);
    });
});
