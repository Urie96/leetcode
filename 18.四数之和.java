import java.util.*;

/*
 * @lc app=leetcode.cn id=18 lang=java
 *
 * [18] 四数之和
 */

// @lc code=start
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> ret = new ArrayList<>();
        Arrays.sort(nums);
        if (nums.length < 4) {
            return ret;
        }
        for (int a = 0; a < nums.length - 3; a++) {
            if (a > 0 && nums[a] == nums[a - 1]) {
                continue;
            }
            for (int b = a + 1; b < nums.length - 2; b++) {
                if (b > a + 1 && nums[b] == nums[b - 1]) {
                    continue;
                }
                int c = b + 1, d = nums.length - 1;
                while (c < d) {
                    int sum = nums[a] + nums[b] + nums[c] + nums[d];
                    if (sum == target) {
                        ret.add(Arrays.asList(nums[a], nums[b], nums[c], nums[d]));
                        while (c < d && nums[c] == nums[++c]) {
                        }
                        while (c < d && nums[d] == nums[--d]) {
                        }
                    } else if (sum < target) {
                        while (c < d && nums[c] == nums[++c]) {
                        }
                    } else {
                        while (c < d && nums[d] == nums[--d]) {
                        }
                    }
                }
            }
        }
        return ret;
    }
}
// @lc code=end
