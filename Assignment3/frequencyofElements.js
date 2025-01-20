//2. Count Frequency of Elements :Given an array of n integers, write a program to count the frequency of each element in the array.


const arr = [1,2,2,3,3,3,4,4,4,4];

const counts = {};

arr.forEach(function (x) { 
    counts[x] = (counts[x] || 0) + 1; 

});
console.log(counts)