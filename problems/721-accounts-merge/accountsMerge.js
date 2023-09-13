class UnionFind {
    constructor(n) {
        this.parent = [...Array(n).keys()];
        this.rank = Array(n).fill(1);
    }

    find(x) {
        while (x !== this.parent[x]) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    union(x1, x2) {
        const p1 = this.find(x1);
        const p2 = this.find(x2);
        if (p1 === p2) {
            return false;
        }

        if (this.rank[p1] > this.rank[p2]) {
            this.parent[p2] = p1;
            this.rank[p1] += this.rank[p2];
        } else {
            this.parent[p1] = p2;
            this.rank[p2] += this.rank[p1];
        }

        return true;
    }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function (accounts) {
    const uf = new UnionFind(accounts.length);
    const emailToAcc = {};
    for (let i = 0; i < accounts.length; i += 1) {
        const nameAndEmails = accounts[i];
        for (let j = 1; j < nameAndEmails.length; j += 1) {
            const email = nameAndEmails[j];
            if (email in emailToAcc) {
                uf.union(i, emailToAcc[email]);
            } else {
                emailToAcc[email] = i;
            }
        }
    }

    const emailGroup = {};
    for (const [email, i] of Object.entries(emailToAcc)) {
        const leader = uf.find(i);
        emailGroup[leader] = emailGroup[leader] ?? [];
        emailGroup[leader].push(email);
    }

    const res = [];
    for (const [i, emails] of Object.entries(emailGroup)) {
        const name = accounts[i][0];
        res.push([name, ...emails.sort()]);
    }
    return res;
};

module.exports = { accountsMerge };
