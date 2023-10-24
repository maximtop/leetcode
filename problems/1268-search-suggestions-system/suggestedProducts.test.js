const { suggestedProducts } = require('./suggestedProducts');

describe('suggestedProducts', () => {
    it('generates list of suggested words', () => {
        expect(suggestedProducts(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse'))
            .toEqual([
                ['mobile', 'moneypot', 'monitor'],
                ['mobile', 'moneypot', 'monitor'],
                ['mouse', 'mousepad'],
                ['mouse', 'mousepad'],
                ['mouse', 'mousepad'],
            ]);
    });
});
