const { findJudge } = require('./findJudge');

describe('findJudge', () => {
    it('finds', () => {
        // expect(findJudge(3, [[1, 3], [2, 3]])).toBe(3);
        // expect(findJudge(3, [[1, 2], [2, 3]])).toBe(-1);
        // expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).toBe(-1);
        // expect(findJudge(1, [])).toBe(-1);
        expect(findJudge(
            11,
            [
                [1, 8],
                [1, 3],
                [2, 8],
                [2, 3],
                [4, 8],
                [4, 3],
                [5, 8],
                [5, 3], [6, 8], [6, 3], [7, 8], [7, 3], [9, 8], [9, 3], [11, 8], [11, 3]],
        )).toBe(-1);
    });
});
