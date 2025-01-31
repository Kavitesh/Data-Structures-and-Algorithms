# Coding Tricks to Master LeetCode Problems

Mastering LeetCode problems requires a combination of **problem-solving strategies**, **coding techniques**, and **practice**. Below are some **coding tricks** and **strategies** for major types of LeetCode problems:

---

## 1. Two Pointers
- **Use Case**: Problems involving arrays or linked lists (e.g., finding pairs, reversing, or partitioning).
- **Tricks**:
  - Use one pointer at the start and one at the end for problems like **Two Sum** or **Palindrome Check**.
  - Use a slow and fast pointer for linked list problems like **Detecting Cycles**.
  - Move pointers conditionally based on comparisons (e.g., move left if the sum is too small, right if too large).

---

## 2. Sliding Window
- **Use Case**: Subarray or substring problems (e.g., maximum sum, longest substring with unique characters).
- **Tricks**:
  - Use two pointers to represent the window boundaries.
  - Expand the window by moving the right pointer and shrink it by moving the left pointer.
  - Keep track of window state using a hash map or variables (e.g., character counts).

---

## 3. Dynamic Programming (DP)
- **Use Case**: Problems with overlapping subproblems (e.g., knapsack, longest common subsequence, Fibonacci).
- **Tricks**:
  - Identify the **state** (e.g., indices, remaining capacity) and **transition** (how to move from one state to another).
  - Use **memoization** (top-down) or **tabulation** (bottom-up) to store intermediate results.
  - Start with a recursive solution, then optimize it with DP.

---

## 4. Backtracking
- **Use Case**: Problems involving permutations, combinations, or exhaustive search (e.g., N-Queens, Subsets).
- **Tricks**:
  - Use recursion to explore all possible choices.
  - Prune invalid paths early to reduce the search space.
  - Use a temporary list to track the current path and backtrack by removing the last element.

---

## 5. Binary Search
- **Use Case**: Problems involving sorted arrays or search spaces (e.g., finding an element, minimizing/maximizing a value).
- **Tricks**:
  - Use `left = mid + 1` and `right = mid - 1` to avoid infinite loops.
  - For rotated arrays, check which half is sorted and adjust the search space accordingly.
  - Use binary search for problems like **Finding Peak Element** or **Search in Rotated Sorted Array**.

---

## 6. Graph Algorithms
- **Use Case**: Problems involving trees, grids, or networks (e.g., shortest path, connected components).
- **Tricks**:
  - Use **BFS** for shortest path problems (e.g., unweighted graphs).
  - Use **DFS** for traversal or cycle detection.
  - Use **Union-Find (Disjoint Set Union)** for dynamic connectivity problems.
  - Memorize common graph representations (e.g., adjacency list, adjacency matrix).

---

## 7. Greedy Algorithms
- **Use Case**: Problems where local optimal choices lead to a global solution (e.g., scheduling, coin change).
- **Tricks**:
  - Sort the input if necessary (e.g., intervals by end time).
  - Make the best choice at each step and prove it leads to the optimal solution.
  - Use a priority queue (heap) for problems like **Meeting Rooms II**.

---

## 8. Bit Manipulation
- **Use Case**: Problems involving binary operations (e.g., counting set bits, XOR tricks).
- **Tricks**:
  - Use `n & (n - 1)` to clear the lowest set bit.
  - Use `n ^ n = 0` and `n ^ 0 = n` for XOR-based problems.
  - Use bit masks for subset generation or state representation.

---

## 9. Stack and Queue
- **Use Case**: Problems involving nested structures or ordering (e.g., valid parentheses, sliding window maximum).
- **Tricks**:
  - Use a stack for problems like **Valid Parentheses** or **Next Greater Element**.
  - Use a monotonic stack for problems like **Largest Rectangle in Histogram**.
  - Use a queue or deque for problems like **Sliding Window Maximum**.

---

## 10. Trie (Prefix Tree)
- **Use Case**: Problems involving strings and prefixes (e.g., autocomplete, word search).
- **Tricks**:
  - Implement a Trie with nodes containing children and a flag for end-of-word.
  - Use Trie for efficient prefix matching or word insertion.

---

## 11. Heap (Priority Queue)
- **Use Case**: Problems requiring efficient access to the smallest or largest element (e.g., kth largest element, merge k sorted lists).
- **Tricks**:
  - Use a min-heap for problems like **Kth Largest Element**.
  - Use a max-heap for problems like **Top K Frequent Elements**.
  - Combine heaps with other techniques (e.g., sliding window).

---

## 12. Union-Find (Disjoint Set Union)
- **Use Case**: Problems involving dynamic connectivity or grouping (e.g., number of islands, friend circles).
- **Tricks**:
  - Implement path compression and union by rank for optimal performance.
  - Use Union-Find for problems like **Redundant Connection** or **Accounts Merge**.

---

## General Tips :
1. **Understand Patterns**: Recognize common problem patterns and apply the appropriate technique.
2. **Practice Consistently**: Solve problems daily and revisit challenging ones.
3. **Analyze Time and Space Complexity**: Always consider the efficiency of your solution.
4. **Write Clean Code**: Use meaningful variable names and modularize your code.
5. **Test Edge Cases**: Consider edge cases like empty inputs, large inputs, or invalid inputs.
6. **Learn from Solutions**: Study optimal solutions and understand why they work.

---
