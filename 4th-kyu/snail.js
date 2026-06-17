/**
 * 4 kyu
Snail
Given an n x n array, return the array elements arranged 
from outermost elements to the middle element, traveling 
clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of 
the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
 */
function snail(array) {
  let arr = [];
  while (array.length) {
    // push first array
    arr.push(...array.shift())
    // get every last item from array
    for (let i = 0; i < array.length; i++) {
      arr.push(array[i].pop())
    }
    // push last array backwards
    arr.push(...(array.pop() || []).reverse())
    // get every first item from array
    for (let i = array.length - 1; i > 0; i--) {
      arr.push(array[i].shift())
    }
  }
  return arr;
}