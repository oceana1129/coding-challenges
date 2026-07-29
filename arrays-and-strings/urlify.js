/**
 * Write a method to replace all spaces in a string with '%20'. You
 * may assume that the string has sufficient space at the end to hold
 * the additional characters, and that you are given the "true" length
 * of the string
 *
 * Hints
 * - It's often easiest to modify strings by going from the end of the
 * string to the beginning.
 * - You might need to know the number of spaces, can you just count them?
 */
function urlify(str, trueLength) {
  // string value, or any length
  // string could have additional spaces anywhere in it
  // including trailing spaces
  // return
  // string with replaced spaces using '%20'
  // examples
  // 'john smith' -> 'john%20smith'
  // 'Mr John Smith       ' -> 'Mr%20John%20Smith'
  // 'Mr John    Smith       ' -> 'Mr%20John%20Smith'
  // psuedocode
  // verify string
  // trim string for whitespacw
  // split by space
  // join with (%20) and return
  if (!str) return "";
  return str.trim().split(/\s+/).join("%20");
}


console.log(urlify("john smith"));
console.log(urlify("Mr John Smith       "));
console.log(urlify("Mr John    Smith       "));