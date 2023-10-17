/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
    const canOpen = Array(rooms.length).fill(false);

    const dfs = (key) => {
        const keys = rooms[key];
        canOpen[key] = true;
        for (const k of keys) {
            if (!canOpen[k]) {
                dfs(k);
            }
        }
    };

    dfs(0);
    return canOpen.filter((i) => !i).length === 0;
};

module.exports = { canVisitAllRooms };
