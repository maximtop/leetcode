const { cloneGraph } = require('./cloneGraph');
const { Node } = require('../helpers/graph/Node');

describe('cloneGraph', () => {
    it('clones graph', () => {
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);
        node1.neighbors = [node2, node4];
        node2.neighbors = [node1, node3];
        node3.neighbors = [node2, node4];
        node4.neighbors = [node1, node3];

        const copyNode1 = new Node(1);
        const copyNode2 = new Node(2);
        const copyNode3 = new Node(3);
        const copyNode4 = new Node(4);
        copyNode1.neighbors = [copyNode2, copyNode4];
        copyNode2.neighbors = [copyNode1, copyNode3];
        copyNode3.neighbors = [copyNode2, copyNode4];
        copyNode4.neighbors = [copyNode1, copyNode3];

        expect(cloneGraph(node1)).toEqual(copyNode1);
        expect(cloneGraph(node1)).not.toBe(copyNode1);
    });

    it('handles empty graph', () => {
        expect(cloneGraph(null)).toEqual(null);
    });
});
