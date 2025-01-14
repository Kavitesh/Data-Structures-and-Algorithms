# Find Minimum in Rotated Sorted Array
[LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) 
|
[Solution](153_find-minimum-in-rotated-sorted-array.js)
|
Array

This document explains two solutions for the LeetCode problem [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/). The problem involves finding the smallest element in a rotated sorted array of unique integers.

## Problem Description

A sorted array has been rotated at some pivot unknown beforehand. For example, the array `[3,4,5,1,2]` might have been rotated at pivot index `3`, making it `[1,2,3,4,5]` originally. The task is to find the minimum element of the array in O(log n) time complexity.

### Constraints:
- All integers in the array are unique.
- The array does not contain duplicates.
- The array length is at least 1.

## Approach 1: Simple Linear Search (Brute Force)

This approach involves iterating through the array to find the minimum element. It is straightforward but not optimal.

### Code:
```javascript
function findMin(nums) {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

// Example Usage:
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
```

### Complexity Analysis:
- **Time Complexity:** O(n), where `n` is the length of the array.
- **Space Complexity:** O(1).

## Approach 2: Optimized Binary Search

To achieve O(log n) time complexity, we use a binary search approach. The key idea is to leverage the sorted and rotated property of the array.

### Algorithm:
1. Initialize two pointers, `left` and `right`, at the start and end of the array.
2. Use a loop to perform binary search until `left < right`.
3. Calculate the middle index.
4. Compare the middle element with the rightmost element to decide which half contains the minimum.
5. Adjust the `left` or `right` pointer based on the comparison.
6. Return the element at the `left` pointer, which will be the minimum.

### Code:
```javascript
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum is in the right half
            left = mid + 1;
        } else {
            // Minimum is in the left half or at mid
            right = mid;
        }
    }

    return nums[left];
}

// Example Usage:
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
```

### Complexity Analysis:
- **Time Complexity:** O(log n), as we halve the search space in each iteration.
- **Space Complexity:** O(1), as we use constant extra space.

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                              |
|----------------------|-----------------|------------------|------------------------------------|
| Linear Search        | O(n)           | O(1)             | Simple but not optimal             |
| Binary Search        | O(log n)       | O(1)             | Efficient for sorted and rotated arrays |

