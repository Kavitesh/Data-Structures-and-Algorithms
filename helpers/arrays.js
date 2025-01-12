const swap = (array, i, j) => {
  let temp = array[j]
  array[j] = array[i];
  array[i] = temp;
}

const newArray = (n, m) => {
  return Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
}

module.exports = { swap, newArray }