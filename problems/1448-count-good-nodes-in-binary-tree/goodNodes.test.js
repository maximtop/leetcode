const { TreeNode } = require('../helpers/tree/TreeNode');
const { goodNodes } = require('./goodNodes');

describe('goodNodes', () => {
    it('calculates good nodes', () => {
        const tree = new TreeNode(1, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(3));
        expect(goodNodes(tree)).toEqual(4);
    });
});
