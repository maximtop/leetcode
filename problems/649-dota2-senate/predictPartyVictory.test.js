const { predictPartyVictory } = require('./predictPartyVictory');

describe('predictPartyVictory', () => {
    it('predicts party victory', () => {
        expect(predictPartyVictory('RD')).toBe('Radiant');
        expect(predictPartyVictory('DRR')).toBe('Radiant');
    });
});
