const { findRepeatedDnaSequences } = require('./findRepeatedDnaSequences');

describe(findRepeatedDnaSequences, () => {
    it('finds repeated dna sequences', () => {
        expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
    });
});
