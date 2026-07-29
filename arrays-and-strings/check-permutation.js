/**
 * Check Permutation
 *
 * Given two strings, write a method to decide if one is a permutation of the other.
 *
 * Hints
 * - Describe what it menas for two strings to be permutations of each other. Now,
 * look at that definition provided. Can you check the strings against that definition.
 * - There is one solution that is O(n log n) time. Another solution uses some space, but is O(n) time.
 * - Could a hash table be useful?
 * - Two strings that are permutations should have the same character, but in different
 * orders. Can you make the orders the same?
 */
function isPermutationSorted(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function isPermutation(str1, str2) {
  // both are strings minimum of 1 char
  // return bool on if they are permutation
  // examples
  // teeth, thete -> true
  // car, cats -> false
  // cat, tba -> false
  // rat, tar

  // pseudocode
  // check if length of strings are same (return false if they're not)
  // hashtable to store the values
  // go through string 1, add to hashtable
  // repeat with string 2
  // if hashtable doesn't already have a value
  // return false
  // otherwise, deduct the values
  // if it equals less than zero, then its not a permutation
  if (str1.length !== str2.length) return false;
  const counts = new Map();

  for (let char of str1) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!counts.has(char)) return false;
    counts.set(char, counts.get(char) - 1);
    if (counts.get(char) < 0) return false;
  }
  return true;
}

console.log(isPermutation("teeth", "thete"));
console.log(isPermutation("teeth", "thete"));
console.log(isPermutation("car", "arc"));
console.log(isPermutation("fitness", "gymtime"));
