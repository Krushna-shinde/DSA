// Linear Search

function linearSearch(value,list){
    let found=false;
    let position=-1;
    let  index=0;
    while(!found && index<list.length){
        if(list[index]==value){
            found=true;
            position=index;
        } else{
            index++;
            }
     }
             console.log(`The element is found at the Position :${position}`);
    }
    linearSearch(11,[1,3,4,5,33,55,11,6]);

//  Binary search
function binarySearch(value, list) {
    let low = 0;
    let high = list.length - 1;
    let mid;
    let found = false;
    let position = -1;
    while (!found && low <= high) {
      mid = Math.floor((low + high) / 2);
      if (list[mid] == value) {
        found = true;
        position = mid;
      } else if (list[mid] < value) { //upper half
        low = mid + 1;
      } else { //lower half
        high = mid - 1;
      }
    }
    console.log(`The element is found at the Position :${position}`);
  }
  
  binarySearch(11, [1, 3, 4, 5, 11, 33, 55, 6]); // Output: 4
  

