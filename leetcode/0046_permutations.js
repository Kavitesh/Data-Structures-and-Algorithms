function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack
        }
    }

    backtrack(0);
    return result;
}
