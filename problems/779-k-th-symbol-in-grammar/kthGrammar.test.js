const { kthGrammar } = require('./kthGrammar');

describe('kthGrammar', () => {
    it('returns nth line for kth grammar', () => {
        expect(kthGrammar(1, 1)).toEqual(0);
        expect(kthGrammar(2, 1)).toEqual(0);
        expect(kthGrammar(2, 2)).toEqual(1);
    });
});
