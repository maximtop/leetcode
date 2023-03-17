const { search, rotateIndex } = require('./search');

describe('search', () => {
    it('finds target in the rotated sorted array', () => {
        expect(search([3, 4, 5, 1, 2], 1)).toBe(3);
        expect(search([1, 3], 3)).toBe(1);
        expect(search([3, 1], 3)).toBe(0);
        expect(search([6, 7, 8, 1, 2, 3, 4, 5], 6)).toBe(0);
    });
});

describe('rotateIndex', () => {
    it('finds rotate index', () => {
        expect(rotateIndex([1, 2, 3, 4])).toBe(0);
        expect(rotateIndex([1, 3])).toBe(0);
        expect(rotateIndex([3, 4, 1, 2])).toBe(2);
        expect(rotateIndex([6, 7, 8, 1, 2, 3, 4, 5])).toBe(3);
    });
});
