/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let b = m + n - 2
    let a = Math.min(m, n) - 1
    let c = 1
    for (let i = 0; i < a; i++) {
        c *= (b - i)
    }
    for (let i = 1; i <= a; i++) {
        c /= i
    }
    return c
};
// @lc code=end

console.log(uniquePaths(2, 3))