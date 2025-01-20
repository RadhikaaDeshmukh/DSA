// 3. Find the Second Largest Element :Given an array of n integers, write a program to find the second largest element in the array.


const arr = [12,35,1,10,34,1];
// Output: 34

function findSecondLargest(arr) {

  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }
  let first = 0, second = 0;
  arr.forEach(num => {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  });
  if (second === 0) {
    throw new Error("No second largest element found");
  }
  return second;
}
const secondLargest = findSecondLargest(arr);
console.log(secondLargest);  
