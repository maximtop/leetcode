const { pushDominoes } = require('./pushDominoes');

describe(pushDominoes, () => {
    it('returns final state of dominoes', () => {
        expect(pushDominoes('RR.L')).toBe('RR.L');
        expect(pushDominoes('.L.R...LR..L..')).toBe('LL.RR.LLRRLL..');
    });
});
