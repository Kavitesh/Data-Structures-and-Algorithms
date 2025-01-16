# Search in Rotated Sorted Array II

[LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) 
|
[Solution](81_search-in-rotated-sorted-array-ii.js)
|
Array 

The problem involves finding whether a target element exists in a rotated sorted array, where duplicates are allowed.

## Problem Description

A sorted array has been rotated at some pivot unknown beforehand. For example, the array `[2,5,6,0,0,1,2]` might have been rotated at pivot index `3`. The task is to determine whether a target value exists in the array.

### Constraints:
- The array may contain duplicates.
- The array length is at least 1.
- The algorithm should have an average time complexity better than O(n).

## Approach 1: Linear Search (Brute Force)

This approach involves iterating through the array to find the target element. It is straightforward but not optimal.

### Code:
```javascript
function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return true;
        }
    }
    return false;
}

// Example Usage:
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // Output: true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // Output: false
```

### Complexity Analysis:
- **Time Complexity:** O(n), where `n` is the length of the array.
- **Space Complexity:** O(1).

## Approach 2: Modified Binary Search

To achieve better time complexity, we use a modified binary search. This approach handles duplicates by skipping them when they make determining the sorted portion ambiguous.

### Algorithm:
1. Initialize two pointers, `left` and `right`, at the start and end of the array.
2. Use a loop to perform binary search until `left <= right`.
3. Calculate the middle index.
4. If the middle element matches the target, return `true`.
5. If duplicates are present, increment `left` or decrement `right` to skip them.
6. Determine which portion of the array (left or right) is sorted.
7. Based on the sorted portion, decide whether the target lies in it or the other half.
8. Adjust the `left` or `right` pointer accordingly.
9. If the loop ends, return `false`.

### Code:
```javascript
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // Handle duplicates
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            // Left portion is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right portion is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
}

// Example Usage:
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // Output: true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // Output: false
```

### Complexity Analysis:
- **Time Complexity:** O(log n) in the best case. In the worst case (e.g., all elements are duplicates), it degrades to O(n).
- **Space Complexity:** O(1).

## Summary

| Approach             | Time Complexity    | Space Complexity | Notes                                  |
|----------------------|--------------------|------------------|---------------------------------------|
| Linear Search        | O(n)              | O(1)             | Simple but not optimal                 |
| Modified Binary Search | O(log n) (average) | O(1)             | Handles duplicates efficiently         |

