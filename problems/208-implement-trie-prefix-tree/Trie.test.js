const { Trie } = require('./Trie');

describe('Trie', () => {
    it('works', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.search('apple')).toBe(true);
        expect(trie.startsWith('app')).toBe(true);
        expect(trie.search('b')).toBe(false);
        trie.insert('ape');
        expect(trie.search('ape')).toBe(true);
    });
});
