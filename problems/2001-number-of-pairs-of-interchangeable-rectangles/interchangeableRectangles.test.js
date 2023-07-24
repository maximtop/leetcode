const { interchangeableRectangles } = require('./interchangeableRectangles');

describe('interchangeableRectangles', () => {
    it('finds all pairs', () => {
        expect(interchangeableRectangles([[4, 8], [3, 6], [10, 20], [15, 30]])).toBe(6);
    });
});
