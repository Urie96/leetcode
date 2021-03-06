import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        Test t = new Test();
        int[] arr = new int[] { 3, 4, -1, 1 };
        System.out.println(t.firstMissingPositive(arr));
    }

    public int firstMissingPositive(int[] nums) {
        int len = nums.length;
        boolean findOne = false;
        for (int i = 0; i < len; i++) {
            if (nums[i] == 1) {
                findOne = true;
            }
            if (nums[i] <= 0 || nums[i] > len) {
                nums[i] = 1;
            }
        }
        if (!findOne) {
            return 1;
        }
        for (int i = 0; i < len; i++) {
            int idx = nums[i] - 1;
            if (nums[idx] > 0) {
                nums[idx] *= -1;
            }
        }
        for (int i = 0; i < len; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }
        return len + 1;
    }

}