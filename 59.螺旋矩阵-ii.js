/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = []
    for (let i = 0; i < n; i++) {
        res[i] = []
    }
    let l = 0, r = n - 1, t = 0, b = n - 1
    let n2 = n * n
    let i = 1
    let x = 0, y = 0
    while (i <= n2) {
        for (x = l, y = t; x <= r; x++) {
            res[y][x] = i
            i++
        }
        t++
        for (x = r, y = t; y <= b; y++) {
            res[y][x] = i
            i++
        }
        r--
        for (x = r, y = b; x >= l; x--) {
            res[y][x] = i
            i++
        }
        b--
        for (x = l, y = b; y >= t; y--) {
            res[y][x] = i
            i++
        }
        l++
    }
    return res
};
// @lc code=end

console.log(generateMatrix(3))