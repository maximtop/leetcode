const { new21Game } = require('./new21Game');

describe('new21Game', () => {
    it('finds probability', () => {
        expect(new21Game(10, 1, 10)).toBe(1);
        expect(new21Game(6, 1, 10)).toBe(0.6);
    });
});
