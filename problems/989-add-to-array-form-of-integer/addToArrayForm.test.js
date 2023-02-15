const { addToArrayForm } = require('./addToArrayForm');

describe('addToArrayForm', () => {
    it('adds numbers', () => {
        expect(addToArrayForm([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4]);
    });
});
