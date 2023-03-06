const { TreeNode } = require('../helpers/tree/TreeNode');
const { maxDepth } = require('./maxDepth');

describe('maxDepth', () => {
    it('finds max depth', () => {
        const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
        expect(maxDepth(tree)).toBe(3);
    });
});
