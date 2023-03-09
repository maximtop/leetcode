const { Node, connect } = require('./connect');

describe('connect', () => {
    it('connects', () => {
        const tree = new Node(1, new Node(2), new Node(3));
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const expectedTree = node1;
        node1.left = node2;
        node1.right = node3;
        node2.next = node3;
        node3.next = null;

        expect(connect(tree)).toEqual(expectedTree);
    });
});
