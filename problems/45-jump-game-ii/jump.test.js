const { jump } = require('./jump');

describe('jump', () => {
    it('finds min jumps', () => {
        expect(jump([2, 3, 1, 1, 4])).toBe(2);
        expect(jump([2, 3, 0, 1, 4])).toBe(2);
    });
});
