const { maxProfit, maxProfitSlidingWindow } = require('./121_best-time-to-buy-and-sell-stock');
const { maxSubArray } = require('./53_maximum-subarray');
const { search } = require('./33_search-in-rotated-sorted-array');
const { uniquePaths, uniquePaths1D } = require('./62_unique-paths');
const { longestCommonSubsequence, longestCommonSubsequence1D } = require('./1143_longest-common-subsequence');
const { maxProfit: maxProfitCooldown, maxProfitOptimized } = require('./309_best-time-to-buy-and-sell-stock-with-cooldown'); // Aliasing to avoid naming conflicts
const { MedianFinder, MedianFinderHeap } = require('./295_find-median-from-data-stream');
const { cloneGraphDfs, cloneGraphBfs } = require('./133_clone-graph');
const { coinChange, coinChangeBottomUp } = require('./322_coin-change');
const { findMin } = require('./153_find-minimum-in-rotated-sorted-array');
const { change, changeDfs } = require('./518_coin-change-ii');
const { search: searchII } = require('./81_search-in-rotated-sorted-array-ii'); // Aliasing to avoid naming conflicts



// Export all the imported modules:
module.exports = {
    maxProfit,
    maxProfitSlidingWindow,
    maxSubArray,
    search,
    uniquePaths,
    uniquePaths1D,
    longestCommonSubsequence,
    longestCommonSubsequence1D,
    maxProfitCooldown,
    maxProfitOptimized,
    MedianFinder,
    MedianFinderHeap,
    cloneGraphDfs,
    cloneGraphBfs,
    coinChange,
    coinChangeBottomUp,
    findMin,
    change,
    changeDfs,
    searchII, // The aliased search function from 81_search-in-rotated...
};

