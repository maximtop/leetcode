const { mincostTickets } = require('./mincostTickets');

describe('minconstTickets', () => {
    it('finds minimum cost of tickets', () => {
        expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])).toBe(11);
    });
});
