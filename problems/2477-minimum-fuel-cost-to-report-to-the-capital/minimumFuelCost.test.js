const { minimumFuelCost } = require('./minimumFuelCost');

describe('minimumFuelCost', () => {
    it('finds minimum fuel required', () => {
        const roads = [[0, 1], [0, 2], [0, 3]];
        const seats = 5;
        expect(minimumFuelCost(roads, seats)).toBe(3);
    });

    it('finds minimum fuel required 2', () => {
        const roads = [[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]];
        const seats = 2;
        expect(minimumFuelCost(roads, seats)).toBe(7);
    });
});
