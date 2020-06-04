/*
 * @lc app=leetcode.cn id=7 lang=java
 *
 * [7] 整数反转
 */

// @lc code=start
class Solution {
    public int reverse(int x) {
        long ret = 0L;
        while (x != 0) {
            int lastNum = x % 10;
            x = x / 10;
            ret = 10 * ret + lastNum;
        }
        if (ret > Integer.MAX_VALUE || ret < Integer.MIN_VALUE) {
            return 0;
        }
        return (int) ret;
    }
}
// @lc code=end
