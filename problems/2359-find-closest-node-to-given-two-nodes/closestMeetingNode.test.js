const { closestMeetingNode } = require('./closestMeetingNode');

describe('closestMeetingNode', () => {
    // it('finds closest meeting node', () => {
    //     const edges = [2, 2, 3, -1];
    //     const node1 = 0;
    //     const node2 = 1;
    //     expect(closestMeetingNode(edges, node1, node2)).toBe(2);
    // });
    it('finds again', () => {
        const edges = [5, 3, 1, 0, 2, 4, 5];
        const node1 = 3;
        const node2 = 2;
        expect(closestMeetingNode(edges, node1, node2)).toBe(3);
    });
});
