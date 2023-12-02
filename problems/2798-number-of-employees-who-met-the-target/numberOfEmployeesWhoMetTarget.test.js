const { numberOfEmployeesWhoMetTarget } = require('./numberOfEmployeesWhoMetTarget');

describe('numberOfEmployeesWhoMetTarget', () => {
    it('finds number of employees who met the target', () => {
        expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)).toBe(3);
    });
});
