const { uniquePathsWithObstacles } = require('./uniquePathsWithObstacles');
const { uniquePathsWithObstaclesDynamic } = require('./uniquePathsWithObstaclesDynamic');

describe('uniquePathsWithObstacles', () => {
    it('counts all possible paths', () => {
        expect(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
        expect(uniquePathsWithObstacles([[0, 1], [0, 0]])).toBe(1);
    });
});

describe('uniquePathsWithObstaclesDynamic', () => {
    it('counts all possible paths', () => {
        // expect(uniquePathsWithObstaclesDynamic([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
        // expect(uniquePathsWithObstaclesDynamic([[0, 1], [0, 0]])).toBe(1);
        expect(uniquePathsWithObstaclesDynamic([[0, 1]])).toBe(0);
    });
});
