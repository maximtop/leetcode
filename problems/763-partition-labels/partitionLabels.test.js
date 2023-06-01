const { partitionLabels } = require('./partitionLabels');

describe('partitionLabels', () => {
    it('detects partitions', () => {
        expect(partitionLabels('abc')).toEqual([1, 1, 1]);
        expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8]);
    });
});
