# Combination Sum II Problem

[LeetCode](https://leetcode.com/problems/combination-sum-ii/) 
|
[Solution](40_combination-sum-ii.js)
|
Dynamic Programming

The **Combination Sum II** problem is a variation of the backtracking problem on LeetCode. Here's how to understand, solve, and optimize the problem.

## Problem Statement

Given a collection of candidate numbers (`candidates`) and a target integer (`target`), find all unique combinations in `candidates` where the chosen numbers sum to `target`.

Each number in `candidates` may only be used once in the combination.

### Constraints:
1. All numbers (including `target`) are positive integers.
2. The solution set must not contain duplicate combinations.

---

## Example

### Input:
```plaintext
candidates = [10,1,2,7,6,1,5]
target = 8
```

### Output:
```plaintext
[[1,1,6],[1,2,5],[1,7],[2,6]]
```

### Explanation:
- `1 + 1 + 6 = 8`
- `1 + 2 + 5 = 8`
- `1 + 7 = 8`
- `2 + 6 = 8`

---

## Approach

The key differences from the original Combination Sum problem are:
1. Each candidate can only be used once.
2. We need to handle duplicate values in `candidates` carefully to avoid duplicate combinations.

### Steps to Solve:
1. **Sort the Candidates:** Sorting helps in managing duplicates and ensures combinations are generated in lexicographical order.
2. **Recursive Backtracking:**
   - Explore each candidate, reducing the target.
   - Skip duplicates within the same recursive depth.
   - Ensure each number is used only once by starting the next recursion at `i + 1`.

---

## Implementation

Here's a JavaScript solution:

```javascript
function combinationSum2(candidates, target) {
    const result = [];

    function backtrack(remaining, start, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            // Stop further exploration if the candidate exceeds the remaining target
            if (candidates[i] > remaining) break;

            path.push(candidates[i]);
            backtrack(remaining - candidates[i], i + 1, path);
            path.pop(); // Backtrack
        }
    }

    candidates.sort((a, b) => a - b); // Sort candidates
    backtrack(target, 0, []);
    return result;
}
```

### Explanation:
1. **Sorting the Input:**
   ```javascript
   candidates.sort((a, b) => a - b);
   ```
   Sorting ensures that duplicate values are adjacent, making it easier to skip them.

2. **Skipping Duplicates:**
   ```javascript
   if (i > start && candidates[i] === candidates[i - 1]) continue;
   ```
   Avoid using the same value twice in the same recursive depth.

3. **Recursive Exploration:**
   ```javascript
   path.push(candidates[i]);
   backtrack(remaining - candidates[i], i + 1, path);
   path.pop();
   ```
   Explore the current candidate and then backtrack to try other options.

---

## Complexity Analysis

### Time Complexity:
- **Worst Case:** \(O(2^N)\)
  - Each candidate can be included or excluded in a combination.
  - \(N\): Length of the sorted `candidates` array.

### Space Complexity:
- **Auxiliary Space:** \(O(T)\)
  - Maximum recursion depth proportional to the target value.

---

## Key Takeaways

- Handling duplicates is critical to ensuring unique combinations.
- Sorting simplifies the process of managing duplicates and pruning invalid paths.
- Backtracking is an effective approach to explore all valid combinations under constraints.

By following these steps, you can efficiently solve the Combination Sum II problem on LeetCode.

