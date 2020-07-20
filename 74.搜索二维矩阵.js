/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false
    }
    let t = 0, b = matrix.length - 1
    while (t <= b) {
        let m = Math.floor((t + b) / 2)
        if (matrix[m][0] < target) {
            t = m + 1
        } else if (matrix[m][0] > target) {
            b = m - 1
        } else {
            return true
        }
    }
    if (t >= matrix.length) {
        t--
    } else if (matrix[t][0] > target) {
        t--
    }
    if (t < 0 || t >= matrix.length) {
        return false
    }
    let l = 0, r = matrix[t].length - 1
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (matrix[t][m] < target) {
            l = m + 1
        } else if (matrix[t][m] > target) {
            r = m - 1
        } else {
            return true
        }
    }
    return false
};
// @lc code=end

console.log(searchMatrix(
    [
        [1]
    ], 1
))