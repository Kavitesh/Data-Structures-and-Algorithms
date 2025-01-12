const sort = require('./sort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');

module.exports = {
  ...sort,
  mergeSort,
  quickSort
};
