const { maxDistance } = require('./maxDistance');

describe('maxDistance', () => {
    it('finds max distance to the watter', () => {
        const grid = [[1, 0, 1], [0, 0, 0], [1, 0, 1]];
        expect(maxDistance(grid)).toBe(2);

        const grid2 = [[1, 0, 0], [0, 0, 0], [0, 0, 0]];
        expect(maxDistance(grid2)).toBe(4);
    });
});
