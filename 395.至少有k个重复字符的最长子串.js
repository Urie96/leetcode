/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let count = new Array(26).fill(0)
    let partCount
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++
    }
    function method(l) {
        partCount = [...count]
        for (let i = l; i < s.length; i++) {
            if (partCount[s.charCodeAt(i) - 97] >= k) {
                count[s.charCodeAt(i) - 97]--
            } else {
                let tail = method(i + 1)
                return Math.max(tail, i - l)
            }
        }
        return s.length - l
    }
    return method(0)
};
// @lc code=end

console.log(longestSubstring("ababacb", 3))