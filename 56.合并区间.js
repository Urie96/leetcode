/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) {
        return []
    }
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    res.push(intervals[0])
    intervals.forEach(arr => {
        let lastElement = res[res.length - 1]
        if (arr[0] <= lastElement[1]) {
            lastElement[1] = Math.max(arr[1], lastElement[1])
        } else {
            res.push(arr)
        }
    })
    return res
};
// @lc code=end

console.log(merge([[1, 4], [2, 3]]))