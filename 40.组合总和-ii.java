import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * @lc app=leetcode.cn id=40 lang=java
 *
 * [40] 组合总和 II
 */

// @lc code=start
class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
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
        int len = candidates.length;
        for (int i = startidx; i < len;) {
            int remain = target - candidates[i];
            if (remain < 0) {
                break;
            }
            path.add(candidates[i]);
            method(candidates, remain, path, res, i + 1);
            path.remove(path.size() - 1);
            while (++i < len && candidates[i] == candidates[i - 1]) {
            }
        }
    }
}
// @lc code=end
