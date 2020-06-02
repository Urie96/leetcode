/*
 * @lc app=leetcode.cn id=5 lang=java
 *
 * [5] 最长回文子串
 */

// @lc code=start
class Solution {
    public String longestPalindrome(String s) {
        int start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expand(s, i, i);
            if (len1 > end - start) {
                start = i - len1 / 2;
                end = start + len1;
            }
            int len2 = expand(s, i, i + 1);
            if (len2 > end - start) {
                start = i - len2 / 2 + 1;
                end = start + len2;
            }
        }
        return s.substring(start, end);
    }

    private int expand(String s, int l, int r) {
        while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {
            l--;
            r++;
        }
        return r - l + 1 - 2;
    }
}
// @lc code=end
