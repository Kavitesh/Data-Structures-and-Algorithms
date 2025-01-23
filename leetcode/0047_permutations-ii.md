# Permutations II Problem

[LeetCode](https://leetcode.com/problems/permutations-ii/) 
|
[Solution](0047_permutations.js)
|
Dynamic Programming

The **Permutations II** problem builds upon the standard permutations problem but includes duplicate elements in the input array. This requires handling duplicate permutations carefully to avoid redundant results.

---

## Problem Statement

Given a collection of numbers, `nums`, that might contain duplicates, return all unique permutations in any order.

### Constraints:
1. 1 <= nums.length <= 8
2. -10 <= nums[i] <= 10

---

## Example

### Input:
```plaintext
nums = [1, 1, 2]
```

### Output:
```plaintext
[
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1]
]
```

### Explanation:
- Even though `1` appears twice in `nums`, duplicate permutations such as `[1, 1, 2]` and `[1, 1, 2]` are avoided in the result.

---

## Approach

To solve this problem, we use **Backtracking** with a strategy to skip duplicate permutations. This involves sorting the input array and ensuring that no duplicate elements are considered more than once at the same recursive level.

### Steps to Solve:
1. **Sort the Input:** Sorting helps identify duplicate elements and allows for easy skipping during backtracking.

2. **Use a Visited Array:** Maintain a `visited` array to track which elements have been used in the current recursive path.

3. **Recursive Backtracking:**
   - For each element in `nums`, consider it only if it hasn’t been visited yet.
   - Skip duplicate elements at the same recursive level by ensuring that the current element isn’t the same as the previous one unless the previous one was used in the current path.

4. **Base Case:**
   - When the current path length equals the length of `nums`, add the path to the result.

---

## Implementation

Here is a JavaScript solution:

```javascript
function permuteUnique(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    const visited = new Array(nums.length).fill(false);

    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;

            // Skip duplicates: Ensure we use each number only once per level
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

            visited[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            visited[i] = false;
        }
    }

    backtrack([]);
    return result;
}
```

### Explanation:
1. **Sorting the Array:**
   - Sorting allows us to easily skip duplicate elements during iteration.
   ```javascript
   nums.sort((a, b) => a - b);
   ```

2. **Visited Array:**
   - Keeps track of which elements are used in the current path.
   ```javascript
   const visited = new Array(nums.length).fill(false);
   ```

3. **Skipping Duplicates:**
   - If the current element is the same as the previous one and the previous one hasn’t been used, skip it.
   ```javascript
   if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;
   ```

4. **Recursive Backtracking:**
   - Explore permutations by adding the current element, recursing, and then backtracking.
   ```javascript
   path.push(nums[i]);
   backtrack(path);
   path.pop();
   ```

---

## Complexity Analysis

### Time Complexity:
- **Worst Case:** \(O(N! \cdot N)\)
  - \(N!\) permutations for an array of size \(N\).
  - \(O(N)\) to copy each permutation to the result.

### Space Complexity:
- \(O(N)\):
  - Space used by the recursion stack and the `visited` array.

---

## Key Takeaways

- Sorting the input helps handle duplicate elements efficiently.
- Using a `visited` array ensures elements aren’t reused in the current permutation.
- Skipping duplicates prevents redundant work and ensures unique permutations.

By following this approach, you can solve the Permutations II problem efficiently and handle arrays with duplicate elements.

