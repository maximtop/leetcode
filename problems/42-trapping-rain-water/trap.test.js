const { trap } = require('./trap');

describe('trap', () => {
    it('calculates how much watter was trapped', () => {
        const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
        expect(trap(height)).toBe(6);
    });
});
