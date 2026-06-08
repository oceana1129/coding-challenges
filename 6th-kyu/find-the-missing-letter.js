/**
 * 6 kyu
Find the missing letter

Write a method that takes an array of consecutive 
(increasing) letters as input and that returns 
the missing letter in the array.

You will always get an valid array. And it will 
be always exactly one letter be missing. The length 
of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
 */
function findMissingLetter(array) {
  let arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let first = arr.indexOf(array[0])
  let second = arr.lastIndexOf(array[array.length -1])
  let full = arr.slice(first, second + 1)
  for (let i = 0; i < full.length; i++) {
    if (array.indexOf(full[i]) === -1) return full[i]
  }
  return ' ';
}