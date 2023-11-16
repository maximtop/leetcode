const { bestTeamScore } = require('./bestTeamScore');

describe('bestTeamScore', () => {
    it('determines best possible score', () => {
        expect(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5])).toBe(34);
    });
});
