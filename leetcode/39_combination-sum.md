# Combination Sum Problem

[LeetCode](https://leetcode.com/problems/combination-sum/) 
|
[Solution](39_combination-sum.js)
|
Dynamic Programming

The **Combination Sum** problem is a classic backtracking problem on LeetCode. Here's how to understand, solve, and optimize the problem.

## Problem Statement

Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order.

The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one chosen number differs.

### Constraints:
1. All elements in `candidates` are distinct.
2. 1 \<= `candidates[i]` \<= 200.
3. 1 \<= `target` \<= 500.

---

## Example

### Input:
```plaintext
candidates = [2,3,6,7]
target = 7
```

### Output:
```plaintext
[[2,2,3],[7]]
```

### Explanation:
- `2 + 2 + 3 = 7`
- `7 = 7`

---

## Approach

This problem can be solved using **Backtracking**, which explores all possible combinations recursively while pruning paths that exceed the target sum.

### Simpler Solution

Before diving into a fully optimized solution, let’s look at a simple, straightforward implementation. Here, we don't sort the candidates and handle pruning naturally during recursion.

```javascript
function combinationSum(candidates, target) {
    const result = [];

    function dfs(remaining, index, path) {
        if (remaining < 0) return; // Path exceeds target
        if (remaining === 0) {
            result.push([...path]); // Valid combination
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(remaining - candidates[i], i, path); // Allow reuse of the same element
            path.pop(); // Backtrack
        }
    }

    dfs(target, 0, []);
    return result;
}
```

### Explanation:
1. **DFS Function:**
   - `remaining` keeps track of how much of the target is left.
   - `index` ensures that we only consider current and later candidates to avoid duplicates.
   - `path` holds the current combination being explored.

2. **Base Cases:**
   - If `remaining < 0`, terminate the path as it exceeds the target.
   - If `remaining === 0`, add the current path to the result.

3. **Recursive Step:**
   - Add the current candidate to `path`.
   - Recur with the reduced target and the same `index` (to allow reuse of the current candidate).
   - Backtrack by removing the last added candidate from `path`.

---

## Optimized Solution

While the simpler solution works well, we can optimize it by sorting the candidates first. Sorting helps prune unnecessary paths earlier, reducing the recursion depth and improving efficiency.

```javascript
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(remaining, start, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break; // Early pruning

            path.push(candidates[i]);
            backtrack(remaining - candidates[i], i, path);
            path.pop();
        }
    }

    candidates.sort((a, b) => a - b); // Sort candidates
    backtrack(target, 0, []);
    return result;
}
```

### Key Differences:
- **Sorting Candidates:** Ensures that larger numbers are skipped earlier.
- **Pruning Condition:** Stops exploring further when `candidates[i] > remaining`.

---

## Complexity Analysis

### Time Complexity:
- **Simpler Solution:** \(O(2^T \times k)\)
  - \(T\): Target value.
  - \(k\): Average length of combinations.

- **Optimized Solution:** Slightly better due to pruning, but still exponential in the worst case.

### Space Complexity:
- \(O(T)\): Maximum recursion depth proportional to the target value.

---

## Key Takeaways

- The simpler solution provides a clear understanding of the backtracking approach.
- The optimized solution improves efficiency with sorting and pruning.
- Backtracking is a powerful technique for exploring combinations in constraint problems.

By following these approaches, you can effectively solve the Combination Sum problem on LeetCode.

