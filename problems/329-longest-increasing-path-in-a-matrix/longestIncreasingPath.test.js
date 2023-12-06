const { longestIncreasingPath } = require('./longestIncreasingPath');

describe('longestIncreasingPath', () => {
    it('finds length of the longest increasing path', () => {
        expect(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]])).toBe(4);
    });
});
