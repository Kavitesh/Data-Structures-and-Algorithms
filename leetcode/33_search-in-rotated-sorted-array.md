# Search in Rotated Sorted Array

[LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/) 
|
[Solution](33_search-in-rotated-sorted-array.js)
|
Array 

The problem involves finding the index of a target element in a rotated sorted array of unique integers.

## Problem Description

A sorted array has been rotated at some pivot unknown beforehand. For example, the array `[4,5,6,7,0,1,2]` might have been rotated at pivot index `4`. The task is to find the index of a target value in the array. If the target is not present, return `-1`.

### Constraints:
- All integers in the array are unique.
- The array does not contain duplicates.
- The array length is at least 1.
- The algorithm should run in O(log n) time complexity.

## Approach 1: Linear Search (Brute Force)

This approach involves iterating through the array to find the target element. While simple, it is not optimal.

### Code:
```javascript
function search(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example Usage:
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
```

### Complexity Analysis:
- **Time Complexity:** O(n), where `n` is the length of the array.
- **Space Complexity:** O(1).

## Approach 2: Optimized Binary Search

To achieve O(log n) time complexity, we use a modified binary search. The key idea is to identify the sorted portion of the array and decide whether to search in that half or the other.

### Algorithm:
1. Initialize two pointers, `left` and `right`, at the start and end of the array.
2. Use a loop to perform binary search until `left <= right`.
3. Calculate the middle index.
4. Determine which portion of the array (left or right) is sorted.
5. Based on the sorted portion, decide whether the target lies in it or the other half.
6. Adjust the `left` or `right` pointer accordingly.
7. If the target is found, return its index. If the loop ends, return `-1`.

### Code:
```javascript
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Determine which part is sorted
        if (nums[left] <= nums[mid]) {
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

    return -1;
}

// Example Usage:
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
```

### Complexity Analysis:
- **Time Complexity:** O(log n), as we halve the search space in each iteration.
- **Space Complexity:** O(1), as we use constant extra space.

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                              |
|----------------------|-----------------|------------------|------------------------------------|
| Linear Search        | O(n)           | O(1)             | Simple but not optimal             |
| Binary Search        | O(log n)       | O(1)             | Efficient for sorted and rotated arrays |

For more details and to try out the problem, visit the [LeetCode problem page](https://leetcode.com/problems/search-in-rotated-sorted-array/).
