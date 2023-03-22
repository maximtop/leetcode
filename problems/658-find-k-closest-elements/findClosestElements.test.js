const { findClosestElements } = require('./findClosestElements');

describe('findClosestElements', () => {
    it('finds closest elements', () => {
        expect(findClosestElements([1, 2, 3, 4, 5], 2, 3)).toEqual([2, 3]);
    });
});
