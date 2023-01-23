/* eslint-disable prefer-destructuring */
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
    const map = {};
    if (trust.length === 0 && n === 1) {
        return 1;
    }

    if (trust.length === 0 && n > 1) {
        return -1;
    }

    for (let i = 0; i < trust.length; i += 1) {
        const el = trust[i];
        const citizen = el[0];
        const trustedByCitizen = el[1];
        const inMapCitizen = map[citizen];
        if (inMapCitizen) {
            inMapCitizen.trusts += 1;
        } else {
            map[citizen] = { trusts: 1, trusted: 0 };
        }

        const inMapTrustedByCitizen = map[trustedByCitizen];
        if (inMapTrustedByCitizen) {
            inMapTrustedByCitizen.trusted += 1;
        } else {
            map[trustedByCitizen] = { trusts: 0, trusted: 1 };
        }
    }

    for (let i = 1; i <= n; i += 1) {
        const current = map[i];
        if (current && current.trusted === n - 1 && current.trusts === 0) {
            return i;
        }
    }

    return -1;
};

module.exports = { findJudge };
