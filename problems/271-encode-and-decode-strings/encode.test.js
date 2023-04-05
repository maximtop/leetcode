const { encode, decode } = require('./encode');

describe('encode/decode', () => {
    describe('encode', () => {
        it('encodes', () => {
            expect(encode(['#max', 'test'])).toBe('4##max4#test');
        });
    });

    describe('decode', () => {
        it('decodes', () => {
            expect(decode('4##max4#test')).toEqual(['#max', 'test']);
        });
    });
});
