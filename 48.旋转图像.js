/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let len = matrix.length
    for (let x = 0; x < len; x++) {
        for (let y = x + 1; y < len; y++) {
            let temp = matrix[x][y]
            matrix[x][y] = matrix[y][x]
            matrix[y][x] = temp
        }
    }
    let halfLen = Math.floor(len / 2)
    for (let x = 0; x < len; x++) {
        for (let y = 0; y < halfLen; y++) {
            let temp = matrix[x][y]
            matrix[x][y] = matrix[x][len - y - 1]
            matrix[x][len - y - 1] = temp
        }
    }
};
// @lc code=end
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
console.log(matrix)
