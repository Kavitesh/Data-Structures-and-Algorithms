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

const {MaxHeap, MinHeap} = require('../helpers');
class MedianFinderHeap {
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

module.exports = { MedianFinder, MedianFinderHeap }