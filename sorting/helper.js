const someNumbers = [199, 424, 61, 21, 31, 51, 63, 87, 283, 34, 0];

const numbers = () => someNumbers.map(n => n);

const swap = (array, i, j) => {
  let temp = array[j]
  array[j] = array[i];
  array[i] = temp;
}

module.exports = { numbers, swap}