const { uniqueOccurrences } = require('./uniqueOccurrences');

describe('uniqueOccurrences', () => {
    it('finds if there are unique occurrences only', () => {
        expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBeTruthy();
        expect(uniqueOccurrences([1, 2])).toBeFalsy();
    });
});
