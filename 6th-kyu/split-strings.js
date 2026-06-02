/**
 * Complete the solution so that it splits the string into strings 
 * of two characters in a list/array (depending on the language you use). 
 * If the string contains an odd number of characters then it should 
 * replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */
function solution(str){
   let arr = [];
  for (let i = 0; i < str.length; i+=2) {
    let split = str.slice(i, i+2);
    if (split.length == 1) split += "_";
    arr.push(split);
  }
  return arr;
}