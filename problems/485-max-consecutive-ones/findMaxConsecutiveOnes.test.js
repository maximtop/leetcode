const { findMaxConsecutiveOnes } = require('./findMaxConsecutiveOnes');

describe('findMaxConsecutiveOnes', () => {
    it('finds', () => {
        expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
    });
});
