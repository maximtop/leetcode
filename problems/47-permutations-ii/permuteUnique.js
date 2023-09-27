/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
    const res = [];
    const perm = [];
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        const key = nums[i];
        map[key] = (map[key] || 0) + 1;
    }
    const dfs = () => {
        if (perm.length === nums.length) {
            res.push([...perm]);
        }
        for (const key of Object.keys(map)) {
            if (map[key] > 0) {
                map[key] -= 1;
                perm.push(Number(key));

                dfs();

                map[key] += 1;
                perm.pop();
            }
        }
    };

    dfs();

    return res;
};

module.exports = { permuteUnique };
