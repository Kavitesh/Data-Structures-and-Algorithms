const sort = require('./sorting/sort');
const mergeSort = require('./sorting/mergeSort');


console.log(sort.bubbleSort(sort.numbers()));
console.log(sort.selectionSort(sort.numbers()));
console.log(sort.insertionSort(sort.numbers()));
console.log(mergeSort.mergeSort(sort.numbers()));
