import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        Test t = new Test();
        int[] arr = new int[] { 1, 3,2 };
        t.nextPermutation(arr);
        System.out.println(Arrays.toString(arr));
    }

    public void nextPermutation(int[] nums) {
        int i = nums.length - 1;
        for (; i > 0; i--) {
            if (nums[i - 1] < nums[i]) {
                break;
            }
        }
        if (i < 1) {
            return;
        }
        for (int j = nums.length - 1; j >= i; j--) {
            if (nums[j] > nums[i - 1]) {
                swap(nums, i - 1, j);
            }
        }
        int j = nums.length - 1;
        while (i < nums.length) {
            swap(nums, i++, j--);
        }
    }

    private void swap(int[] nums, int a, int b) {
        int tmp = nums[a];
        nums[a] = nums[b];
        nums[b] = tmp;
    }

}