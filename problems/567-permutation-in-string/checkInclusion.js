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

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    let left = 0;
    for (let right = s1.length; right <= s2.length; right += 1) {
        if (isAnagram(s1, s2.substring(left, right))) {
            return true;
        }
        left += 1;
    }
    return false;
};

module.exports = { checkInclusion };
