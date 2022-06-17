const someNumbers = [199, 424, 61, 21, 31, 51, 63, 87, 283, 34, 0];

const numbers = () =>someNumbers.map(n=>n);

const swap = ( array, i, j) =>{  
  let temp = array[j]
  array[j] = array[i];
  array[i] = temp;
}

const bubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length-i; j++) { // skip the last bubbled item by using -i
      if(array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }        
  }
  return array;
}

const selectionSort = (array) => {
  for(let i = 0; i < array.length; i++){
    let min = i;
    for(let j = i+1; j < array.length; j++){ 
      if (array[j] < array[min]){
        min = j;
      }
    }
    swap(array, i, min);
  }
  return array;
}

const insertionSort = (array) => {
  for(let i = 1; i < array.length; i++){
    let curItem = array[i];
    let j;
    for(j = i-1; (j >= 0 && curItem< array[j]); j--){
      array[j+1]=array[j];
    }
    array[j+1] = curItem;
  }
  return array;
}



module.exports = {insertionSort, selectionSort, bubbleSort, numbers}