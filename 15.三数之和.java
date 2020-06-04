import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * @lc app=leetcode.cn id=15 lang=java
 *
 * [15] 三数之和
 */

// @lc code=start
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ret = new ArrayList<>();
        Arrays.sort(nums);
        if (nums.length < 3 || nums[0] > 0 || nums[nums.length - 1] < 0) {
            return ret;
        }
        for (int i = 0; i < nums.length - 2;) {
            if (nums[i] > 0) {
                break;
            }
            int l = i + 1, r = nums.length - 1;
            while (l < r && nums[r] >= 0) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    ret.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    while (l < r && nums[l] == nums[++l]) {
                    }
                    while (l < r && nums[r] == nums[--r]) {
                    }
                } else if (sum < 0) {
                    while (l < r && nums[l] == nums[++l]) {
                    }
                } else if (sum > 0) {
                    while (l < r && nums[r] == nums[--r]) {
                    }
                }
            }
            while (i < nums.length - 2 && nums[i] == nums[++i]) {
            }
        }
        return ret;
    }
}
// @lc code=end
