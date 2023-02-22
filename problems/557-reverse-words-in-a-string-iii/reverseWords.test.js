const { reverseWords } = require('./reverseWords');

describe('reverseWords', () => {
    it('reverses', () => {
        expect(reverseWords("Let's take LeetCode contest")).toEqual("s'teL ekat edoCteeL tsetnoc");
    });
});
