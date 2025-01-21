# Combination Sum IV Problem

[LeetCode](https://leetcode.com/problems/combination-sum-iv/) 
|
[Solution](377_combination-sum-iv.js)
|
Dynamic Programming


The **Combination Sum IV** problem is a variation of the combination sum problems on LeetCode. Here's how to understand, solve, and optimize the problem.

## Problem Statement

Given an array of distinct integers `nums` and a target integer `target`, return the number of possible combinations that add up to `target`.

The order of numbers in combinations matters in this problem, making it a **permutation problem**.

### Constraints:
1. All elements in `nums` are positive integers.
2. All the elements of nums are unique.
3. 1 <= nums.length <= 200
4. 1 <= nums[i] <= 1000
5. 1 <= target <= 1000

---

## Example

### Input:
```plaintext
nums = [1, 2, 3]
target = 4
```

### Output:
```plaintext
7
```

### Explanation:
The possible combinations are:
1. `1 + 1 + 1 + 1 = 4`
2. `1 + 1 + 2 = 4`
3. `1 + 2 + 1 = 4`
4. `1 + 3 = 4`
5. `2 + 1 + 1 = 4`
6. `2 + 2 = 4`
7. `3 + 1 = 4`

---

## Approach

This problem can be solved using **Dynamic Programming**.

### Steps to Solve:
1. **Define a DP Array:**
   - Use `dp[i]` to represent the number of ways to get the sum `i`.

2. **Base Case:**
   - There is one way to get the sum `0`: by using no numbers.
     ```
     dp[0] = 1
     ```

3. **Iterative Update:**
   - For every `i` from `1` to `target`, check every number in `nums`. If `i - num >= 0`, add `dp[i - num]` to `dp[i]`.

4. **Return the Result:**
   - The final result is stored in `dp[target]`.

---

## Implementation

Here is a JavaScript solution:

```javascript
function combinationSum4(nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1; // Base case

    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i - num >= 0) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
}
```

### Explanation:
1. **DP Array Initialization:**
   ```javascript
   const dp = new Array(target + 1).fill(0);
   dp[0] = 1;
   ```
   The array `dp` tracks the number of ways to achieve each sum from `0` to `target`.

2. **Nested Iteration:**
   - The outer loop iterates over each target sum `i`.
   - The inner loop iterates over each number in `nums`.
   - For each valid number, update `dp[i]`:
     ```javascript
     dp[i] += dp[i - num];
     ```

3. **Result:**
   Return `dp[target]` as the number of possible combinations.

---

## Complexity Analysis

### Time Complexity:
- \(O(target \times N)\):
  - \(target\) iterations for the outer loop.
  - \(N\) iterations for the inner loop over `nums`.

### Space Complexity:
- \(O(target)\): Space used by the `dp` array.

---

## Key Takeaways

- This problem leverages dynamic programming to compute the number of combinations efficiently.
- The order of numbers in combinations matters, making it a permutation problem.
- By iterating over the `nums` array for each target sum, we ensure that all valid combinations are considered.

By following this approach, you can solve the Combination Sum IV problem on LeetCode efficiently.

