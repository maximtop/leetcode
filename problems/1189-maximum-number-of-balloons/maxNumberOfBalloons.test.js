const { maxNumberOfBalloons } = require('./maxNumberOfBalloons');

describe('maxNumberOfBalloons', () => {
    it('finds max number of the built words balloon', () => {
        expect(maxNumberOfBalloons('nlaebolko')).toEqual(1);
        expect(maxNumberOfBalloons('')).toEqual(0);
        expect(maxNumberOfBalloons('loonbalxballpoon')).toEqual(2);
        expect(maxNumberOfBalloons('balon')).toEqual(0);
    });
});
