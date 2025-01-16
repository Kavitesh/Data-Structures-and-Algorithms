function changeDfs(amount, coins) {
    const memo = new Map();

    function dfs(index, remaining) {
        if (remaining === 0) return 1; // Found a valid combination
        if (remaining < 0 || index === coins.length) return 0; // Invalid case

        const key = `${index}-${remaining}`;
        if (memo.has(key)) return memo.get(key);

        // Include the current coin or skip it
        const include = dfs(index, remaining - coins[index]);
        const exclude = dfs(index + 1, remaining);

        memo.set(key, include + exclude);
        return include + exclude;
    }

    return dfs(0, amount);
}

function change(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1; // Base case

    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }

    return dp[amount];
}

module.exports = { change, changeDfs }

if(require.main === module){
    const coins = [1, 2, 5];
    const amount = 5;
    console.log(change(amount, coins)); // Output: 4
    console.log(changeDfs(amount, coins)); // Output: 4
}