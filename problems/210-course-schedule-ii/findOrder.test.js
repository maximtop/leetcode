const { findOrder } = require('./findOrder');

describe('findOrder', () => {
    it('finds order for courses', () => {
        expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
        expect(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toEqual([0, 1, 2, 3]);
    });
});
