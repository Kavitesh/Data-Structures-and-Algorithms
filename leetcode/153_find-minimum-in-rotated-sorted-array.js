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

module.exports = { findMin }
if(require.main === module) {
    console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
    console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
}