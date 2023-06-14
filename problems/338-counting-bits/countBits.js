/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const ans = [];
    const weight = (n) => {
        let binary = n >>> 0;
        let counter = 0;
        while (binary > 0) {
            counter += binary & 1;
            binary >>>= 1;
        }
        return counter;
    };

    for (let i = 0; i <= n; i += 1) {
        ans.push(weight(i));
    }
    return ans;
};

module.exports = { countBits };
