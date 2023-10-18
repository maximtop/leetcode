/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
    const visited = Array(isConnected.length).fill(false);
    let provinces = 0;

    const dfs = (city) => {
        const connections = isConnected[city];
        visited[city] = true;
        for (let i = 0; i < connections.length; i += 1) {
            if (!connections[i]) {
                continue;
            }
            if (!visited[i]) {
                dfs(i);
            }
        }
    };

    for (let i = 0; i < isConnected.length; i += 1) {
        if (!visited[i]) {
            provinces += 1;
            dfs(i);
        }
    }

    return provinces;
};

module.exports = { findCircleNum };
