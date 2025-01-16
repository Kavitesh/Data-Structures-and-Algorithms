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

if (require.main === module) {  
    console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
}