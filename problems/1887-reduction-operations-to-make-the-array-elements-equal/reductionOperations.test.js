const { reductionOperations } = require('./reductionOperations');

describe('reductionOperations', () => {
    it('calculates how many reductions should be done', () => {
        expect(reductionOperations([5, 1, 3])).toBe(3);
    });
});
