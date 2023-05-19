const { rob } = require('./rob');

describe('rob', () => {
    it('calculates max amount of money to rob', () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });
});
