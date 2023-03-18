const { solution } = require('./solution');

describe('firstBadVersion', () => {
    it('finds first bad version', () => {
        const isBadVersion = (n) => {
            return n >= 4;
        };

        const firstBadVersion = solution(isBadVersion);

        expect(firstBadVersion(10)).toEqual(4);
    });
});
