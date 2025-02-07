//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
//https://leetcode.com/problems/search-in-rotated-sorted-array/
//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) { // Minimum only check <
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Handle duplicates
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        } else if (nums[mid] > nums[right]) {
            // Left portion is sorted
            // Minimum is in the right half left = mid + 1
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right portion is sorted
            // Minimum is in the left half or at mid ; right = mid;
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1; 
            }
        }
    }

    return -1; // Minimum return nums[left]
}

if (require.main === module) {  
    console.log("This is the main execution block");
    console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
    console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
}

module.exports = {    
    search
}