const { carFleet } = require('./carFleet');

describe('carFleet', () => {
    it('finds number of car fleets', () => {
        const target = 12;
        const position = [10, 8, 0, 5, 3];
        const speed = [2, 4, 1, 1, 3];
        expect(carFleet(target, position, speed)).toBe(3);
    });
});
