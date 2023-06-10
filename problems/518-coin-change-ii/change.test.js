const { change } = require('./change');

describe('change', () => {
    it('finds number ways to change', () => {
        expect(change(5, [1, 2, 5])).toBe(4);
    });
});
