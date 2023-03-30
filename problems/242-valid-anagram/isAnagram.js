/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapS = {};
    const mapT = {};
    for (let i = 0; i < s.length; i += 1) {
        const charS = s[i];
        mapS[charS] = mapS[charS] ? mapS[charS] + 1 : 1;

        const charT = t[i];
        mapT[charT] = mapT[charT] ? mapT[charT] + 1 : 1;
    }

    const keysS = Object.keys(mapS);
    for (let i = 0; i < keysS.length; i += 1) {
        const key = keysS[i];
        if (mapT[key] !== mapS[key]) {
            return false;
        }
    }

    return true;
};

module.exports = { isAnagram };
