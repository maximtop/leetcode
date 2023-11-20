/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumMinProduct = function (nums) {
    let res = BigInt(0);
    const stack = [];
    const prefix = [0];
    for (const num of nums) {
        prefix.push(prefix.at(-1) + num);
    }
    for (let i = 0; i < nums.length; i += 1) {
        const n = nums[i];
        let newStart = i;
        while (stack.length && stack.at(-1)[1] > n) {
            const [start, val] = stack.pop();
            const total = prefix[i] - prefix[start];
            const cur = BigInt(val) * BigInt(total);
            if (cur > res) {
                res = cur;
            }
            newStart = start;
        }
        stack.push([newStart, n]);
    }
    for (const [start, val] of stack) {
        const total = prefix[nums.length] - prefix[start];
        const cur = BigInt(val) * BigInt(total);
        if (cur > res) {
            res = cur;
        }
    }
    return res % BigInt(1000000007);
};

module.exports = { maxSumMinProduct };
