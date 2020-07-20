/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let b = grid.length, r = grid[0].length
    for (let y = 1; y < b; y++) {
        grid[y][0] += grid[y - 1][0]
    }
    for (let x = 1; x < r; x++) {
        grid[0][x] += grid[0][x - 1]
    }
    for (let y = 1; y < b; y++) {
        for (let x = 1; x < r; x++) {
            grid[y][x] += Math.min(grid[y - 1][x], grid[y][x - 1])
        }
    }
    return grid[b - 1][r - 1]
};
// @lc code=end

console.log(minPathSum(
    [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
))