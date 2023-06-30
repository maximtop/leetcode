const { removeStars } = require('./removeStars');

describe('removeStars', () => {
    it('removes stars and letters on the left', () => {
        expect(removeStars('leet**cod*e')).toBe('lecoe');
    });
});
