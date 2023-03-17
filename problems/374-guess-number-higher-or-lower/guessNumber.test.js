const { getGuessFn, guessNumber } = require('./guessNumber');

describe('guessNumber', () => {
    it('finds picked number', () => {
        expect(guessNumber(10, getGuessFn(5))).toEqual(5);
        expect(guessNumber(10, getGuessFn(1))).toEqual(1);
        expect(guessNumber(10, getGuessFn(6))).toEqual(6);
    });
});
