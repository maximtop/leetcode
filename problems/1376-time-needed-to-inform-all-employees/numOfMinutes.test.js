const { numOfMinutes } = require('./numOfMinutes');

describe('numOfMinutes', () => {
    it('calculates time required to reach all employees', () => {
        const n = 6;
        const headID = 2;
        const manager = [2, 2, -1, 2, 2, 2];
        const informTime = [0, 0, 1, 0, 0, 0];
        expect(numOfMinutes(n, headID, manager, informTime)).toBe(1);
    });
});
