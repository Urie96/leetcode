/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = []
    let temp = newInterval
    intervals.forEach(arr => {
        if (arr[1] < newInterval[0]) {
            res.push(arr)
        } else if (arr[0] > newInterval[1]) {
            if (temp) {
                res.push(temp)
                temp = null
            }
            res.push(arr)
        } else {
            temp[0] = Math.min(temp[0], arr[0])
            temp[1] = Math.max(temp[1], arr[1])
        }
    })
    if (temp) {
        res.push(temp)
    }
    return res
};
// @lc code=end

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))