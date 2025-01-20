//  1. Find the Missing Number : Given an array of n-1 integers in the range of 1 to n with no duplicates in the array. One of the integers is missing in the array. Find the missing integer.


const arr = [1,2,4,6,3,7,8];

function missingarrayE(arr){
const n = arr.length + 1;
const sumofarray = (n* (n+1))/2 ;
const actualSum = arr.reduce((sum,num) => sum + num,0);
return sumofarray - actualSum;

}

const missingNumber = missingarrayE(arr);
console.log(missingNumber); 