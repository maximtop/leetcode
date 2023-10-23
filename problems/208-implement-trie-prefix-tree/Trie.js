class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

const Trie = function () {
    this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let cur = this.root;
    for (const char of word) {
        if (!cur.children[char]) {
            cur.children[char] = new TrieNode();
        }
        cur = cur.children[char];
    }
    cur.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let cur = this.root;
    for (const char of word) {
        if (!cur.children[char]) {
            return false;
        }
        cur = cur.children[char];
    }
    return cur.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let cur = this.root;
    for (const char of prefix) {
        if (!cur.children[char]) {
            return false;
        }
        cur = cur.children[char];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = { Trie };
