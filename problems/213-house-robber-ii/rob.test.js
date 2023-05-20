const { rob } = require('./rob');

describe('rob', () => {
    it('calculates max amount possible to rob', () => {
        expect(rob([2, 3, 2])).toBe(3);
    });
});
