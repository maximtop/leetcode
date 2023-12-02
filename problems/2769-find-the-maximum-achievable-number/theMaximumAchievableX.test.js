const { theMaximumAchievableX } = require('./theMaximumAchievableX');

describe('theMaximumAchievableX', () => {
    it('finds the maximum achievable x', () => {
        expect(theMaximumAchievableX(4, 1)).toBe(6);
    });
});
