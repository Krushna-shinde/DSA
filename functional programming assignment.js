// Composition Function
// Medium
// Create a simple javascript composition function that adds a number x with 5 and divides it with 2 and print the output of that composition function.
// Example 1:
// Input:
// composition5)
// Output:
// 5
// Explanation:
// Inside composition function, the number is added to 5 in separate function and then divided by 2 in separate function, hence the output of the composition function.
// Constraints:
// Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

const add = (x) => x+5;
const divide = (x) => x/2;
const composition = (x) => divide(add(x));
console.log(composition(2));

// Create a Pure Function that multiplys 2 numbers.

// Example 1:
// Input:
// 2 4

// Output:
// 8

// Explanation:
// It returns the multiplication of two numbers, hence the output.

function multiplication(num1,num2){
    return num1*num2;
}
console.log(multiplication(2,4));

// List of Even Numbers
// Easy
// Using the high order filter function, which would receive the even function and would return a list of even numbers. Note: Even function is a function which would return true if the input parameter is even.

// Example 1:
// Input:
// const listOfNumbers = [0,1,2,3,4,5,6,7,8,9,10];

// Output:
// [0, 2, 4, 6, 8, 10 ]

// Explanation:
// Filter function would filter the numbers based on true returning from the even function, hence the output.

// Constraints:
// Restrict to the input format that is mentioned. Use whatever you have learned in live class curriculum to solve this challenge.

// function filterfunction(number,even){
//     return number.filter(even)
// }
// function isEven(number){
//     return number%2==0;
// }
// const number=[0,1,2,3,4,5,6,7,8,9,10];
// const evenNumbers=filterfunction(number,isEven);
// console.log(evenNumbers);

