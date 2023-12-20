const { maxValueOfCoins } = require('./maxValueOfCoins');

describe('maxValueOfCoins', () => {
    it('returns max possible value to get', () => {
        expect(maxValueOfCoins([[1, 100, 3], [7, 8, 9]], 2)).toBe(101);
    });
});
