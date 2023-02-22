const { strStr } = require('./strStr');

describe('strStr', () => {
    it('finds', () => {
        expect(strStr('test', 'est')).toBe(1);
        expect(strStr('sadbutsad', 'sad')).toBe(0);
        expect(strStr('leetcode', 'leeto')).toBe(-1);
    });
});
