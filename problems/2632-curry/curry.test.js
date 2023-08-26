const { curry } = require('./curry');

describe('curry', () => {
    it('curries', () => {
        const sum = (a, b, c) => a + b + c;
        const cSum = curry(sum);
        expect(cSum(1)(2)(3)).toEqual(6);
        expect(cSum(1, 2)(3)).toEqual(6);
        expect(cSum(1)(2, 3)).toEqual(6);
        expect(cSum(1, 2, 3)).toEqual(6);
    });
});
