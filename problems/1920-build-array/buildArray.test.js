const { buildArray } = require('./buildArray');

describe('buildArray', () => {
    it('works', () => {
        expect(buildArray([5, 0, 1, 2, 3, 4])).toEqual([4, 5, 0, 1, 2, 3]);
    });
});
