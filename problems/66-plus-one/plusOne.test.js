const { plusOne } = require('./plusOne');

describe('plusOne', () => {
    it('adds one to the last', () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
        expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
        expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });
});
