// 1)  Quick Sort
// step 1) select first pivot element
// step 2) divide the data structure into two portion 
// step 3) traverse the array left section  and sort 
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length/2)];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  const arr = [3,7,2,8,2,782,7,29,1,3,0,34];
  const newArr = quickSort(arr);
  console.log(newArr); 


  