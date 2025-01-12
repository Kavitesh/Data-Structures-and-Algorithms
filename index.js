// // Factorial 
// const { factorialIterative, factorialRecursive } = require("./factorial");
// console.log(factorialIterative(10));
// console.log(factorialRecursive(10));

// // Fibonacci
// const { fibonacciRecursive, fibonacciIterative, fibonacciMemoized } = require("./fibonacci");
// console.log(fibonacciRecursive(10));
// console.log(fibonacciIterative(100));
// console.log(fibonacciMemoized(100));

// // Sorting
// const { numbers } = require("./helpers/dummyData");
// const { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } = require("./sorting");
// console.log(bubbleSort(numbers()));
// console.log(selectionSort(numbers()));
// console.log(insertionSort(numbers()));
// console.log(mergeSort(numbers()));
// console.log(quickSort(numbers()));

// LeetCode
//require("./leetcode/set_001")();
//require("./leetcode/set_002")();
// const { uniquePaths, uniquePaths1D } = require("./leetcode/dp_62_unique-paths");
// console.log(uniquePaths(3, 7))
// console.log(uniquePaths1D(3, 7))
// const { longestCommonSubsequence , longestCommonSubsequence1D } = require("./leetcode/dp_1143_longest-common-subsequence");
// console.log(longestCommonSubsequence("abcde", "ace"));
// console.log(longestCommonSubsequence1D("abcde", "ace"));
// const { maxProfit, maxProfitOptimized } = require("./leetcode/dp_309_best-time-to-buy-and-sell-stock-with-cooldown")
// console.log(maxProfit([1, 2, 3, 0, 2]));
// console.log(maxProfitOptimized([1, 2, 3, 0, 2]));
// const { maxProfit, maxProfitSlidingWindow } = require("./leetcode/sw_121_best-time-to-buy-and-sell-stock");
// console.log(maxProfit([3, 2, 6, 5, 0, 3]));
// console.log(maxProfitSlidingWindow([3, 2, 6, 5, 0, 3]));
// const {maxSubArray} = require("./leetcode/dp_53_maximum-subarray");
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

const { MedianFinder, MedianFinderHeap } = require("./leetcode/295_find-median-from-data-stream")
const mf = new MedianFinderHeap();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Output: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Output: 2
