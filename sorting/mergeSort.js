const merge = (left, right) => {
  let merged = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      merged.push(left[l++]);
    } else {
      merged.push(right[r++]);
    }
  }
  while (l < left.length) {
    merged.push(left[l++]);
  }
  while (r < right.length) {
    merged.push(right[r++]);
  }
  // console.log("concurred", merged);
  return merged;
}

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid)
  // console.log("divided", left, right);
  return merge(mergeSort(left), mergeSort(right))
}



module.exports = mergeSort;