function distinctPairSum(arr, k) {
  // type your code here
  let result = []
  let temp = []
  for (let i=0; i<arr.length; i++){
    if(arr.indexOf(k-arr[i])!==-1 && arr.indexOf(k-arr[i])!==i && temp.indexOf(arr[i])===-1){
      let group = []
      group.push(arr[i])
      group.push(arr[arr.indexOf(k-arr[i])])
      temp.push(arr[i])
      temp.push(arr[arr.indexOf(k-arr[i])])
      result.push(group)
    }
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
