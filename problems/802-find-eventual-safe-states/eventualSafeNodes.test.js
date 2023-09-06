const { eventualSafeNodes } = require('./eventualSafeNodes');

describe('eventualSafeNodes', () => {
    it('finds safe nodes', () => {
        const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
        expect(eventualSafeNodes(graph)).toEqual([2, 4, 5, 6]);
    });
});
