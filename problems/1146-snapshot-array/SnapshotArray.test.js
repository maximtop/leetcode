const { SnapshotArray } = require('./SnapshotArray');

describe('SnapshotArray', () => {
    it('works as expected', () => {
        const sa = new SnapshotArray(3);
        sa.set(0, 5);
        sa.snap();
        sa.set(0, 6);
        expect(sa.get(0, 0)).toBe(5);
    });
});
