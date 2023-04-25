const { TreeNode } = require('../helpers/tree/TreeNode');
const { invertTree } = require('./invertTree');

describe('invertTree', () => {
    it('should invert tree', () => {
        const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(invertTree(tree)).toEqual(new TreeNode(1, new TreeNode(3), new TreeNode(2)));
    });
});
