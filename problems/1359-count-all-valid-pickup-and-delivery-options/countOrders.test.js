const { countOrders } = require('./countOrders');

describe('countOrders', () => {
    it('counts all possible ways to deliver orders', () => {
        expect(countOrders(1)).toBe(1);
    });
});
