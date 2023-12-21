const { numMusicPlaylists } = require('./numMusicPlaylists');

describe('numMusicPlaylists', () => {
    it('calculates number of possible music lists', () => {
        expect(numMusicPlaylists(3, 3, 1)).toBe(6);
    });
});
