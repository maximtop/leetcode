const { canVisitAllRooms } = require('./canVisitAllRooms');

describe('canVisitAllRooms', () => {
    it('checks if can visit all rooms', () => {
        expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
        expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false);
    });
});
