const { filter } = require('./filter');

describe('filter', () => {
    it('filters elements', () => {
        expect(filter([1, 2, 3], (el) => el === 1)).toEqual([1]);
    });
});
