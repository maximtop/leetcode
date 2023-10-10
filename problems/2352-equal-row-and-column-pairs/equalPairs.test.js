const { equalPairs } = require('./equalPairs');

describe('equalPairs', () => {
    it('counts equal columns and rows', () => {
        expect(equalPairs([
            [3, 2, 1],
            [1, 7, 6],
            [2, 7, 7]])).toBe(1);
        expect(equalPairs(
            [
                [3, 1, 2, 2],
                [1, 4, 4, 5],
                [2, 4, 2, 2],
                [2, 4, 2, 2],
            ],
        )).toBe(3);
    });
});
