const { TreeNode } = require('../helpers/tree/TreeNode');
const { inorderSuccessor } = require('./inorderSuccessor');

describe('inorderSuccessor', () => {
    it('finds closest successor', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(inorderSuccessor(tree, new TreeNode(1)).val).toBe(2);
    });
});
