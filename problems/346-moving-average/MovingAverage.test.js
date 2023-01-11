const { MovingAverage } = require('./MovingAverage');

describe('MovingAverage', () => {
    it('works', () => {
        const movingAverage = new MovingAverage(3);
        expect(movingAverage.next(1)).toBe(1);
        expect(movingAverage.next(10)).toBe(5.5);
        expect(movingAverage.next(3)).toBe(4.666666666666667);
        expect(movingAverage.next(5)).toBe(6);
    });
});
