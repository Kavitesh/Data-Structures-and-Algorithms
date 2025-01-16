# Maximum Subarray Problem 
[LeetCode](https://leetcode.com/problems/maximum-subarray/) 
|
[Solution](53_maximum-subarray.js)
|
Dynamic Programming

## Problem Description
Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Constraints
- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

Example
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 
Explanation: [4,-1,2,1] has the largest sum = 6.


---
## Approach: Dynamic Programming (Also called Kadane's Algorithm)

### Key Idea
Kadane's Algorithm relies on the observation that:
If adding the current element to the previous subarray sum results in a larger sum, the subarray should be extended.
Otherwise, start a new subarray at the current element.

At each step, decide:
1. Should we **continue the current subarray** by including the current number?
2. Or should we **start a new subarray** starting with the current number?

The decision is based on whether the current number alone is greater than the sum of the current subarray plus the current number.

---

### Algorithm Steps
1. Start with two variables:
   - `currentSum = 0`: Tracks the running sum of the current subarray.
   - `maxSum = nums[0]`: Tracks the largest sum encountered so far.
2. Iterate through the array:
   - For each element:
     - Update `currentSum` as the maximum of:
       - The current number (start a new subarray).
       - The sum of the current subarray plus the current number (continue the subarray).
     - Update `maxSum` to the maximum of `maxSum` and `currentSum`.
3. Return `maxSum` as the result.

---

### JavaScript Code

```javascript
function maxSubArray(nums) {
    let currentSum = 0;  // Tracks the current subarray sum
    let maxSum = nums[0]; // Stores the maximum sum found so far

    for (let num of nums) {
        // Restart the subarray if the current sum is too small
        currentSum = Math.max(num, currentSum + num);
        // Update the maximum sum
        if(currentSum > maxSum){
          maxSum = currentSum;
        }
    }

    return maxSum;
  
}
```
### Complexity Analysis
Time Complexity: O(n)
The array is traversed once, and each element is processed in constant time.

Space Complexity: O(1)
Only two variables (currentSum and maxSum) are used.

---
