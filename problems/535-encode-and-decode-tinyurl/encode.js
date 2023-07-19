const encodeMap = new Map();
const decodeMap = new Map();
const base = 'http://tinyurl.com/';

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
    if (encodeMap.has(longUrl)) {
        return encodeMap.get(longUrl);
    }
    const shortUrl = base + encodeMap.size + 1;
    encodeMap.set(longUrl, shortUrl);
    decodeMap.set(shortUrl, longUrl);
    return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return decodeMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

module.exports = { encode, decode };
