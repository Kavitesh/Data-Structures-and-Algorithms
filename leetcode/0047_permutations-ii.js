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
