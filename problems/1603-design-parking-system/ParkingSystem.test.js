const { ParkingSystem } = require('./ParkingSystem');

describe('ParkingSystem', () => {
    it('checks if has parking slots', () => {
        const parkingSystem = new ParkingSystem(1, 1, 0);
        expect(parkingSystem.addCar(1)).toBe(true);
        expect(parkingSystem.addCar(1)).toBe(false);
        expect(parkingSystem.addCar(2)).toBe(true);
        expect(parkingSystem.addCar(3)).toBe(false);
    });
});
