// 1) BuBBle Sort optimized code  logic-->>> if leftElement > rightElement swap leftElement and rightElement

function BBsort(arr1){
    let i;
    let j;
    let length=arr1.length;
    let isSwapped=false;
    for(let i=0;i<length;i++){
        isSwapped=false;
    for(let j=0;j<length;j++){
        if(arr1[j]>arr1[j+1]){
            // if the condition is true then swap the element
            let temp=arr1[j];
            arr1[j]=arr1[j+1];
            arr1[j+1]=temp;
            isSwapped=true;
        }
      }
    //   if no two ele were swapped by inner loop then break the loop 
      if(!isSwapped){
        // break;
      }
    
    }
    // print the sorted array
    console.log(`sorted array for BBL sort is: ${ arr1 }`);
}

  let arr=[3,2,5,7,0,9]
  BBsort(arr);


//   2)selection sort    logic->> sorting algorithm that selects the smallest element 
//     from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

function selectionSort(array) {
    let min_Index;
    for (let i = 0; i < array.length - 1; i++) {
      let min_Index = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min_Index]) {
          min_Index = j;
        }
      }
      if (min_Index !== i) {
        [array[i], array[min_Index]] = [array[min_Index], array[i]];
      }
    }
    console.log(`sorted array for selection sort is: ${ array }`);
  }
let array=[9,5,8,3,0,1]
selectionSort(array,array.length);

// 3)Insertion Sort     logic -->>>>  We assume that the first card is already sorted then, 
//  we select an unsorted card. If the unsorted card is greater than the card in hand, 
//  it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and 
//  put in their right place.

function insertionSort(arrayEle) {
  for (let i = 1; i < arrayEle.length; i++) {
    let current_Key_Value = arrayEle[i];
    let j = i - 1;
    while (j >= 0 && arrayEle[j] > current_Key_Value ) {
      arrayEle[j + 1] = arrayEle[j];
      j--;
    }
    arrayEle[j + 1] = current_Key_Value ;
  }
  console.log(`sorted array for Insertion sort is: ${ arrayEle }`);
}

let arrayEle=[5,2,4,6,1,3]
insertionSort(arrayEle);

// 4)Merge Sort       ->>>> divide and conquer Algorithm
// A divide and conquer algorithm is a strategy of solving a large problem by
//Divide: Divide the given problem into sub-problems using recursion.
// Conquer: Solve the smaller sub-problems recursively. If the subproblem is small enough, then solve it directly.
// Combine: Combine the solutions of the sub-problems that are part of the recursive process to solve the actual problem.

function mergeSort(arr2) {
  if (arr2.length <= 1) {
    return arr2;
  }

  const middleIndex = Math.floor(arr2.length / 2);
  const leftArr = arr2.slice(0, middleIndex);
  const rightArr = arr2.slice(middleIndex);

  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  return merge(sortedLeftArr, sortedRightArr);
}

function merge(leftArr, rightArr) {
  const resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

const arr2 = [5, 2, 9, 1, 5, 6];
console.log(`sorted array for Merge sort is: ${mergeSort(arr2)}`); // Output: [1, 2, 5, 5, 6, 9]








