/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function (products, searchWord) {
    const res = [];
    products.sort();

    let l = 0;
    let r = products.length - 1;
    for (let i = 0; i < searchWord.length; i += 1) {
        const c = searchWord[i];
        while (l <= r && (products[l] <= i || products[l][i] !== c)) {
            l += 1;
        }
        while (l <= r && (products[r] <= i || products[r][i] !== c)) {
            r -= 1;
        }
        res.push([]);
        const remain = r - l + 1;
        for (let w = 0; w < Math.min(remain, 3); w += 1) {
            res.at(-1).push(products[l + w]);
        }
    }
    return res;
};

module.exports = { suggestedProducts };
