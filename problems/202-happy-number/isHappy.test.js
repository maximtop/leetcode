const { isHappy } = require('./isHappy');

describe('isHappy', () => {
    it('checks if number is happy', () => {
        expect(isHappy(19)).toBe(true);
        expect(isHappy(2)).toBe(false);
    });
});
