# Combination Sum III Problem

[LeetCode](https://leetcode.com/problems/combination-sum-iii/) 
|
[Solution](216_combination-sum-iii.js)
|
Dynamic Programming

The **Combination Sum III** problem is a variation of the backtracking problem on LeetCode. Here's how to understand, solve, and optimize the problem.

## Problem Statement

Find all valid combinations of `k` numbers that sum up to `n` such that only numbers from `1` to `9` are used and each combination should be a unique set of numbers.

### Constraints:
1. Each number from `1` to `9` can be used at most once.
2. The solution set must not contain duplicate combinations.
3. 2 <= k <= 9, 1 <= n <= 60.

---

## Example

### Input:
```plaintext
k = 3
n = 7
```

### Output:
```plaintext
[[1, 2, 4]]
```

### Explanation:
- `1 + 2 + 4 = 7`
- No other combinations of 3 numbers add up to 7.

---

## Approach

This problem is solved using **Backtracking**, similar to the previous Combination Sum problems but with the additional constraint of using exactly `k` numbers.

### Steps to Solve:
1. **Recursive Backtracking:**
   - Keep track of the remaining target (`n`), the count of numbers used, and the current path.
   - Explore numbers from `1` to `9` sequentially.
   - Ensure that each number is used only once and skip invalid paths.

2. **Base Cases:**
   - Add the path to the result if the target is reached and the count equals `k`.
   - Terminate the path if the target becomes negative or the count exceeds `k`.

3. **Pruning:** Stop exploring further numbers when the current number exceeds the remaining target.

---

## Implementation

Here is a JavaScript solution:

```javascript
function combinationSum3(k, n) {
    const result = [];

    function backtrack(remaining, start, path) {
        if (remaining === 0 && path.length === k) {
            result.push([...path]);
            return;
        }

        if (path.length >= k || remaining < 0) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(remaining - i, i + 1, path);
            path.pop(); // Backtrack
        }
    }

    backtrack(n, 1, []);
    return result;
}
```

### Explanation:
1. **Recursive Function:**
   - `remaining` tracks the remaining target value.
   - `start` ensures that we only use numbers greater than the previous one.
   - `path` keeps the current combination being explored.

2. **Base Cases:**
   - Stop recursion when the length of `path` exceeds `k` or the target becomes negative.
   - Add valid combinations to the result.

3. **Recursive Exploration:**
   - Explore numbers from `start` to `9`.
   - Add the current number to the path, reduce the target, and recursively explore further numbers.
   - Backtrack by removing the last added number from the path.

---

## Complexity Analysis

### Time Complexity:
- **Worst Case:** \(O(2^9)\)
  - Each number can be included or excluded.
  - The maximum depth of recursion is \(k\).

### Space Complexity:
- \(O(k)\): Maximum recursion depth proportional to the size of the combination.

---

## Key Takeaways

- This problem combines elements of backtracking and constraint satisfaction.
- Pruning paths early when the target becomes negative or the count exceeds `k` improves efficiency.
- The small range of numbers from `1` to `9` ensures the algorithm runs efficiently for all valid inputs.


