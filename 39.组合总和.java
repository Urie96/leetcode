import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * @lc app=leetcode.cn id=39 lang=java
 *
 * [39] 组合总和
 */

// @lc code=start
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(candidates);
        List<Integer> path = new ArrayList<>();
        method(candidates, target, path, res, 0);
        return res;
    }

    public void method(int[] candidates, int target, List<Integer> path, List<List<Integer>> res, int startidx) {
        if (target == 0) {
            res.add(new ArrayList<>(path));
            return;
        }
        if (target < 0) {
            return;
        }
        int len = candidates.length;
        for (int i = startidx; i < len; i++) {
            path.add(candidates[i]);
            method(candidates, target - candidates[i], path, res, i);
            path.remove(path.size() - 1);
        }
    }
}
// @lc code=end
