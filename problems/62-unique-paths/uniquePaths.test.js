const { uniquePaths } = require('./uniquePaths');

describe('uniquePaths', () => {
    it('finds how many unique tabs are available', () => {
        expect(uniquePaths(3, 7)).toBe(28);
    });
});
