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

module.exports = { maxSubArray }