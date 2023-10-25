const { TreeNode } = require('../helpers/tree/TreeNode');
const { longestZigZag } = require('./longestZigZag');

describe('longestZigZag', () => {
    it('finds logest zig zag', () => {
        const tree = new TreeNode(1, new TreeNode(1, null, new TreeNode(1)), new TreeNode(1));
        expect(longestZigZag(tree)).toBe(2);
    });
});
