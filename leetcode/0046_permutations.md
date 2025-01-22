# Permutations Problem

[LeetCode](https://leetcode.com/problems/permutations/) 
|
[Solution](0046_permutations.js)
|
Dynamic Programming

The **Permutations** problem is a classic algorithmic problem that involves finding all possible arrangements of a given array of distinct integers. Here’s how to solve it effectively.

---

## Problem Statement

Given an array `nums` of distinct integers, return all possible permutations. You can return the answer in any order.

### Constraints:
1. 1 <= nums.length <= 6
2. -10 <= nums[i] <= 10
3. All integers in `nums` are distinct.

---

## Example

### Input:
```plaintext
nums = [1, 2, 3]
```

### Output:
```plaintext
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
```

---

## Approach

This problem can be solved using **Backtracking**. The idea is to build permutations recursively by swapping elements and exploring all possible arrangements.

### Steps to Solve:
1. **Recursive Backtracking:**
   - Keep track of the current state of the array and the position being considered.
   - Swap elements to generate new permutations.
   - Backtrack to restore the original state and explore other possibilities.

2. **Base Case:**
   - When the position reaches the end of the array, add the current arrangement to the result.

3. **Pruning:**
   - Since all integers are distinct, no need for duplicate checks.

---

## Implementation

Here is a JavaScript solution:

```javascript
function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack
        }
    }

    backtrack(0);
    return result;
}
```

### Explanation:
1. **Recursive Function:**
   - `start` indicates the position of the current element being considered.
   - When `start === nums.length`, the current permutation is complete.

2. **Swapping and Backtracking:**
   - Swap elements to generate permutations.
   - Restore the original state after exploring each possibility.

3. **Result Storage:**
   - Each complete permutation is stored in the `result` array.

---

## Complexity Analysis

### Time Complexity:
- **Worst Case:** \(O(N!)\)
  - There are \(N!\) permutations for an array of size \(N\).

### Space Complexity:
- \(O(N)\):
  - Space used by the recursion stack.

---

## Key Takeaways

- Backtracking is an effective method for generating permutations.
- Swapping elements in-place minimizes additional space usage.
- The number of permutations grows factorially with the size of the array, so this approach is practical for small arrays.

By following this approach, you can efficiently solve the permutations problem and understand how to generate all arrangements of a given set of distinct integers.

