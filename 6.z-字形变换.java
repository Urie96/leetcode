import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=6 lang=java
 *
 * [6] Z 字形变换
 */

// @lc code=start
class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }
        List<StringBuilder> strlist = new ArrayList<>(numRows);
        for (int i = 0; i < numRows; i++) {
            strlist.add(new StringBuilder());
        }
        boolean godown = true;
        int row = 0;
        for (char c : s.toCharArray()) {
            strlist.get(row).append(c);
            row += godown ? 1 : -1;
            if (row >= numRows) {
                row -= 2;
                godown = false;
            } else if (row < 0) {
                row += 2;
                godown = true;
            }
        }
        StringBuilder ret = new StringBuilder(s.length());
        for (int i = 0; i < numRows; i++) {
            ret.append(strlist.get(i));
        }
        return ret.toString();
    }
}
// @lc code=end
