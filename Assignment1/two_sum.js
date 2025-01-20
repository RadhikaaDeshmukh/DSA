var myArray = [1,2,3,4];
var target = 4;

function findTwosum(myArray, target){
for(var i=0; i< myArray.length; i++){
    for(var j=i+1; j< myArray.length; j++){
        var twoSum = Number(myArray[i]) + Number(myArray[j]);
        if(twoSum === target){
            return[i,j]
        }
    }
}
}
console.log(findTwosum(myArray, target));
