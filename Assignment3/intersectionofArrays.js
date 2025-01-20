// 5.Find the Intersection of Two Arrays: Given two arrays, write a program to find their intersection. The intersection should contain only the unique elements present in both arrays.

const arr1 = [1, 2, 2, 1];
const arr2 = [2, 2];

function findIntersection(arr1, arr2) {
  // Use the filter method to keep only the elements present in both arrays
  const intersection = arr1.filter(num => arr2.includes(num));

  // Use a Set to remove duplicates
  return [...new Set(intersection)];
}

const intersection = findIntersection(arr1, arr2);
console.log(intersection); // Output: [2]
