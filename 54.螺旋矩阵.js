/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = []
    let l = 0, t = 0
    let b = matrix.length
    let r = matrix[0] && matrix[0].length
    let x = 0, y = 0
    while (l < r && t < b) {
        while (x < r && y < b && x >= l && y >= t) {
            res.push(matrix[y][x++])
        }
        x--
        y++
        t++
        while (x < r && y < b && x >= l && y >= t) {
            res.push(matrix[y++][x])
        }
        y--
        x--
        r--
        while (x < r && y < b && x >= l && y >= t) {
            res.push(matrix[y][x--])
        }
        x++
        y--
        b--
        while (x < r && y < b && x >= l && y >= t) {
            res.push(matrix[y--][x])
        }
        y++
        x++
        l++
    }
    return res
};
// @lc code=end
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]))
