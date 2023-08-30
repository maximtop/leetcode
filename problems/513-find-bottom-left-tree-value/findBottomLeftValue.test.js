const { TreeNode } = require('../helpers/tree/TreeNode');
const { findBottomLeftValue } = require('./findBottomLeftValue');

describe('findBottomLeftValue', () => {
    it('finds leftmost node', () => {
        const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))));
        expect(findBottomLeftValue(tree)).toBe(4);
    });
});
