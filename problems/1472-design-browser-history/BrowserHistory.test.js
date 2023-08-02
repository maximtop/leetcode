const { BrowserHistory } = require('./BrowserHistory');

describe('BrowserHistory', () => {
    it('works as expected', () => {
        const browsingHistory = new BrowserHistory('google.com');
        browsingHistory.visit('leetcode.com');
        browsingHistory.visit('facebook.com');
        expect(browsingHistory.back(1)).toBe('leetcode.com');
        expect(browsingHistory.forward(1)).toBe('facebook.com');
        expect(browsingHistory.forward(2)).toBe('facebook.com');
        expect(browsingHistory.back(2)).toBe('google.com');
        expect(browsingHistory.back(10)).toBe('google.com');
    });
});
