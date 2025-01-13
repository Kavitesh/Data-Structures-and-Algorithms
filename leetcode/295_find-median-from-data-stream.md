# Find Median from Data Stream
[LeetCode](https://leetcode.com/problems/find-median-from-data-stream/) 
|
[Solution](295_find-median-from-data-stream.js)
|
Heap

The problem is to design a data structure that efficiently supports adding numbers from a stream and finding the median of the added numbers at any time.

## Problem Statement

Implement the `MedianFinder` class:

- **`MedianFinder()`** initializes the `MedianFinder` object.
- **`addNum(num: number): void`** adds the integer `num` from the data stream to the data structure.
- **`findMedian(): number`** returns the median of all elements so far. The median is the middle value in an ordered integer list. If the size of the list is even, the median is the average of the two middle values.

---

## Naive Solution: Using a Sorted Array

### Approach
1. Maintain a sorted array to store the elements.
2. Use binary search to insert elements in sorted order.
3. Compute the median by accessing the middle elements of the array.

### Implementation
```javascript
class MedianFinder {
  constructor() {
    this.data = [];
  }

  addNum(num) {
    // Insert `num` in sorted order using binary search
    let left = 0, right = this.data.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.data[mid] < num) left = mid + 1;
      else right = mid;
    }
    this.data.splice(left, 0, num);
  }

  findMedian() {
    const n = this.data.length;
    if (n % 2 === 1) return this.data[Math.floor(n / 2)];
    return (this.data[n / 2 - 1] + this.data[n / 2]) / 2;
  }
}

// Usage
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Output: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Output: 2
```

### Complexity
- **Time Complexity**: `O(n)` for insertion (binary search + splice) and `O(1)` for median.
- **Space Complexity**: `O(n)`.

---

## Optimized Solution: Using Two Heaps

### Approach
1. Use two heaps:
   - A max-heap (`low`) for the lower half of numbers.
   - A min-heap (`high`) for the upper half of numbers.
2. Maintain the heaps such that:
   - The size difference between the heaps is at most 1.
   - The max element in `low` is less than or equal to the min element in `high`.
3. Compute the median:
   - If the heaps are of equal size, the median is the average of the roots of both heaps.
   - If the heaps are of different sizes, the median is the root of the larger heap.


### Implementation
Note: 
- We would need a [MinHeap and Maxheap](../helpers/heap.js) as it is not build in in javascript.
- In Java we can use PriorityQueue
- In Python heappush/heappush operations can be used
```javascript
class MedianFinder {
  constructor() {
    this.low = new MaxHeap(); // Max-heap 
    this.high = new MinHeap(); // Min-heap
  }

  addNum(num) {
    if (this.low.size() === 0 || num <= this.low.peek()) {
      this.low.insert(num);
    } else {
      this.high.insert(num);
    }

    // Balance the heaps
    if (this.low.size() > this.high.size() + 1) {
      this.high.insert(this.low.extractMax());
    } else if (this.high.size() > this.low.size()) {
      this.low.insert(this.high.extractMin());
    }
  }

  findMedian() {
    if (this.low.size() > this.high.size()) {
      return this.low.peek();
    } else {
      return (this.low.peek() + this.high.peek()) / 2;
    }
  }
}

// Usage
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Output: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Output: 2
```

### Complexity
- **Time Complexity**: `O(log n)` for insertion (heap operations) and `O(1)` for median.
- **Space Complexity**: `O(n)` for storing elements in the heaps.

---

By using heaps, we achieve an efficient and scalable solution suitable for real-time systems.
