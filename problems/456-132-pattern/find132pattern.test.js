const { find132pattern } = require('./find132pattern');

describe('find132pattern', () => {
    it('finds 132 pattern', () => {
        expect(find132pattern([1, 2, 3])).toBeFalsy();
        expect(find132pattern([1, 3, 2])).toBeTruthy();
        expect(find132pattern([1, 2, 4, 3])).toBeTruthy();
    });
});
