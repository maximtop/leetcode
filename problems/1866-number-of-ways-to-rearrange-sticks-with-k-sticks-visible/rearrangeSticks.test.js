const { rearrangeSticks } = require('./rearrangeSticks');

describe('rearrangeSticks', () => {
    it('finds how many ways to arrange sticks', () => {
        expect(rearrangeSticks(3, 2)).toBe(3);
        expect(rearrangeSticks(5, 5)).toBe(1);
        expect(rearrangeSticks(20, 11)).toBe(647427950);
        expect(rearrangeSticks(105, 20)).toBe(680986848);
    });
});
