const { TreeNode } = require('../helpers/tree/TreeNode');
const { BSTIterator } = require('./BSTIterator');

describe('BSTIterator', () => {
    it('works', () => {
        const tree = new TreeNode(
            7,
            new TreeNode(3),
            new TreeNode(
                15,
                new TreeNode(9),
                new TreeNode(20),
            ),
        );
        const bstIterator = new BSTIterator(tree);
        expect(bstIterator.next()).toBe(3);
        expect(bstIterator.next()).toBe(7);
        expect(bstIterator.hasNext()).toBe(true);
        expect(bstIterator.next()).toBe(9);
        expect(bstIterator.hasNext()).toBe(true);
        expect(bstIterator.next()).toBe(15);
        expect(bstIterator.hasNext()).toBe(true);
        expect(bstIterator.next()).toBe(20);
        expect(bstIterator.hasNext()).toBe(false);
    });
});
