class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator;
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data[0];
  }

  insert(val) {
    this.data.push(val);
    this._heapifyUp();
  }

  extract() {
    const root = this.data[0];
    const end = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = end;
      this._heapifyDown();
    }
    return root;
  }

  _heapifyUp() {
    let index = this.data.length - 1;
    const element = this.data[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.data[parentIndex], element)) break;
      this.data[index] = this.data[parentIndex];
      index = parentIndex;
    }
    this.data[index] = element;
  }

  _heapifyDown() {
    let index = 0;
    const length = this.data.length;
    const element = this.data[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;

      if (leftChildIndex < length && !this.comparator(element, this.data[leftChildIndex])) {
        swap = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        !this.comparator(swap === null ? element : this.data[leftChildIndex], this.data[rightChildIndex])
      ) {
        swap = rightChildIndex;
      }
      if (swap === null) break;

      this.data[index] = this.data[swap];
      index = swap;
    }
    this.data[index] = element;
  }
}

class MaxHeap extends Heap {
  constructor() {
    super((a, b) => a >= b);
  }

  extractMax() {
    return this.extract();
  }
}

class MinHeap extends Heap {
  constructor() {
    super((a, b) => a <= b);
  }

  extractMin() {
    return this.extract();
  }
}

module.exports = { MaxHeap, MinHeap };
