const { swap } = require('../helpers');

const bubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) { // skip the last bubbled item by using -i
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
    // console.log("bubbled iteration", i + 1, array)
  }
  return array;
}

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    swap(array, i, min);
    // console.log("selected", array[i], array)
  }
  return array;
}

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let curItem = array[i];
    let j;
    for (j = i - 1; (j >= 0 && curItem < array[j]); j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curItem;
    // console.log("inserted", curItem, array)
  }
  return array;
}



module.exports = { insertionSort, selectionSort, bubbleSort }