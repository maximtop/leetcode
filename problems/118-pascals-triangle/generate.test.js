const { generate } = require('./generate');

describe('generate', () => {
    it('generates pascals triangle', () => {
        expect(generate(1)).toEqual([[1]]);
        expect(generate(2)).toEqual([[1], [1, 1]]);
        expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    });
});
