// Simple sorts
let array = [4, 5, 7, 2, 3, 1, 10, 100, 13, 8, 100000000, -5];

function bubbleSort(arr) {
  var len = arr.length,
    i, j;
  for (i = len - 1; i >= 0; i--) {
    for (j = len - i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

function selectionSort(arr) {

  var len = arr.length,
    min, i, j;
  for (i = 0; i < len; i++) {
    min = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i != min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function insertionSort(arr) {
  var len = arr.length,
    value,
    i,
    j;

  for (i = 0; i < len; i++) {
    value = arr[i];
    for (j = i - 1; j > -1 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}


// Better :) sorts


function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function quickSort(inputArr) {
  var len = inputArr.length
  let left = [],
    right = [],
    pivot;

  if (len === 0) {
    return inputArr;
  }

  pivot = inputArr[0];

  for (var i = 1; i < len; i++) {

    if (inputArr[i] <= pivot) {
      left.push(inputArr[i]);
    } else {
      right.push(inputArr[i]);
    }

  }

  left = quickSort(left);
  right = quickSort(right);
  console.log(left.concat(pivot, right)); 
  return left.concat(pivot, right);

}

quickSort(array);

// Helper functions

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function merge(arr1, arr2) {
  var result = [],
    il = 0,
    ir = 0;

  while (il < arr1.length && ir < arr2.length) {
    if (arr1[il] < arr2[ir]) {
      result.push(arr1[il++]);
    } else {
      result.push(arr2[ir++]);
    }
  }

  return result.concat(arr1.slice(il)).concat(arr2.slice(ir));

}

function partition(arr, left, right) {
  var pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}
