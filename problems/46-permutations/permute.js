/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const res = [];

    if (nums.length === 1) {
        return [nums];
    }

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        const newNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const perms = permute(newNums);
        for (const perm of perms) {
            perm.push(num);
        }
        res.push(...perms);
    }

    return res;
};

module.exports = { permute };
