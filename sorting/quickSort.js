const { swap } = require('../helpers');

const quickSort = (array, l = 0, r = array.length - 1) => {
  if (l < r) {
    const partitionIndex = partition(array, array[r], l, r);

    // console.log("dividing", [l, partitionIndex - 1], [partitionIndex + 1, r]);
    quickSort(array, l, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, r);
  }
  return array;
}

function partition(array, pivotValue, l, r) {
  // console.log("concurring", [l,r], "with pivotValue", pivotValue);
  let partitionIndex = l;

  while (l < r) {
    if (array[l] < pivotValue) {
      swap(array, l, partitionIndex++);
    }
    l++;
  }
  swap(array, r, partitionIndex);
  // console.log("concurred", array);
  return partitionIndex;
}

module.exports = quickSort;