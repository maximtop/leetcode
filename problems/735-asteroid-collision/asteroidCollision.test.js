const { asteroidCollision } = require('./asteroidCollision');

describe('asteroidCollision', () => {
    it('returns result', () => {
        expect(asteroidCollision([1, -1])).toEqual([]);
        expect(asteroidCollision([1, -1, 2])).toEqual([2]);
        expect(asteroidCollision([2, 1, -1, 2])).toEqual([2, 2]);
        expect(asteroidCollision([2, 1, -1, -2])).toEqual([]);
        expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
    });
});
