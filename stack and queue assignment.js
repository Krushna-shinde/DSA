//Stacks and Queues

/* Sort Stack using another Stack
Given a stack of size n , your task is to sort a stack using another stack by using the function sortstack()
Example 1:
Input:
const arrToSort = [98, 88, 3, 69, 55]
Output:
[3, 55, 69, 88, 98]
Explanation:
The output array has been sorted using another stack.
 */

function sortstack(stack) {
    const tempStack = [];
  
    while (stack.length > 0) {
      const temp = stack.pop();
      while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
        stack.push(tempStack.pop());
      }
      tempStack.push(temp);
    }
  
    return tempStack;
  }
  const arrToSort = [98, 88, 3, 69, 55];
 console.log(sortstack(arrToSort)); // Output: [3, 55, 69, 88, 98]
