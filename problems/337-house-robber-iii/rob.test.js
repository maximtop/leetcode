const { TreeNode } = require('../helpers/tree/TreeNode');
const { rob } = require('./rob');

describe('rob', () => {
    it('finds max amount', () => {
        const tree = new TreeNode(3, new TreeNode(2, null, new TreeNode(3)), new TreeNode(3, null, new TreeNode(1)));
        expect(rob(tree)).toBe(7);
    });
});
