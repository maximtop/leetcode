const { countComponents } = require('./countComponents');

describe('countComponents', () => {
    it('counts components', () => {
        // expect(countComponents(5, [[0, 1], [1, 2], [3, 4]])).toEqual(2);
        expect(countComponents(
            10,
            [[5, 6], [0, 2], [1, 7], [5, 9], [1, 8], [3, 4], [0, 6], [0, 7], [0, 3], [8, 9]],
        )).toEqual(2);
    });
});
