const { convertTemperature } = require('./convertTemperature');

describe('convertTemperature', () => {
    it('works', () => {
        expect(convertTemperature(36.5)).toEqual([309.65000,97.70000]);
    });
});
