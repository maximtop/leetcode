const { generateParenthesis } = require('./generateParenthesis');

describe('generateParenthesis', () => {
    it('generates parenthesis', () => {
        // expect(generateParenthesis(1)).toEqual(['()']);
        // expect(generateParenthesis(2).sort()).toEqual(['()()', '(())'].sort());
        expect(generateParenthesis(3).sort()).toEqual([
            '((()))',
            '(()())',
            '(())()',
            '()(())',
            '()()()',
        ].sort());
    });
});
