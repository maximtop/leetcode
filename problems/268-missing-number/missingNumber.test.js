const { missingNumber } = require('./missingNumber');

describe('missingNumber', () => {
    it('finds missing number', () => {
        expect(missingNumber([0, 1])).toBe(2)
        expect(missingNumber([3,0,1])).toBe(2)
    });
});
