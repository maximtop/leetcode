const { canCompleteCircuit } = require('./canCompleteCircuit');

describe('canCompleteCircuit', () => {
    it('detects', () => {
        expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
    });
});
