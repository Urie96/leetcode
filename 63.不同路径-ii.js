/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0
    }
    let f = [1]
    for (let y = 0; y < obstacleGrid.length; y++) {
        for (let x = 0; x < obstacleGrid[0].length; x++) {
            if (obstacleGrid[y][x]) {
                f[x] = 0
            } else {
                f[x] = (f[x - 1] || 0) + (f[x] || 0)
            }
        }
    }
    return f.pop()
};
// @lc code=end

console.log(uniquePathsWithObstacles(
    [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
))