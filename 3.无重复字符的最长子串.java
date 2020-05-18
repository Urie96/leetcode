/*
 * @lc app=leetcode.cn id=3 lang=java
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 0) {
            return 0;
        }
        int max = 0;
        boolean[] map = new boolean[129];
        int left = 0, right = 0;
        while (right < s.length()) {
            char c = s.charAt(right);
            if (map[c]) {
                map[s.charAt(left)] = false;
                left++;
            } else {
                map[c] = true;
                right++;
                max = max > right - left ? max : right - left;
            }
        }
        return max;
    }
}
// @lc code=end
