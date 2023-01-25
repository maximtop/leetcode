const { findMaxConsecutiveOnes, findMaxConsecutiveOnesBrute, findMaxConsecutiveOnesSlide } = require('./findMaxConsecutiveOnes');

describe('findMaxConsecutiveOnes', () => {
    it('finds', () => {
        expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0])).toBe(4);
    });
});

describe('findMaxConsecutiveOnesBrute', () => {
    it('finds', () => {
        expect(findMaxConsecutiveOnesBrute([1, 0, 1, 1, 0])).toBe(4);
    });
});

describe('findMaxConsecutiveOnesSlide', () => {
    it('finds', () => {
        expect(findMaxConsecutiveOnesSlide([1, 0, 1, 1, 0])).toBe(4);
    });
});
