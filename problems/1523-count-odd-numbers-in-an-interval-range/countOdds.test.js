const { countOdds } = require('./countOdds');

describe('countOdds', () => {
    it('counts', () => {
        expect(countOdds(3, 7)).toBe(3);
        expect(countOdds(11,11)).toBe(1);
        expect(countOdds(11,13)).toBe(1);
    });
});
