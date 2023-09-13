const { accountsMerge } = require('./accountsMerge');

describe('accountsMerge', () => {
    it('merges accounts', () => {
        const accounts = [
            ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
            ['John', 'johnsmith@mail.com', 'john00@mail.com'],
            ['Mary', 'mary@mail.com'],
            ['John', 'johnnybravo@mail.com'],
        ];
        expect(accountsMerge(accounts)).toEqual([
            ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
            ['Mary', 'mary@mail.com'],
            ['John', 'johnnybravo@mail.com'],
        ]);
    });
});
