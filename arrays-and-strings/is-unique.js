/**
 * Is Unique:
 *
 * Implement an algorithm to determine if a string
 * has all unique characters. What if you cannot use additional
 * data structures?
 *
 * Hints
 * Try using a hash table
 * Could a bit vector be useful?
 * Can you solve it in O(N log N) time? What might the solution look like?
 */
function isUniqeuWithMap(string) {
  const map = new Map();
  for (let char of string) {
    if (map.has(char)) return false;
    map.set(char);
  }
  return true;
}

function isUniqueWithSet(string) {
  const set = new Set();
  for (let char of string) {
    if (set.has(char)) return false;
    set.add(char);
  }
  return true;
}

function isUnique(string) {
  let str = string;
  for (let char of string) {
    str = str.slice(1);
    if (str.includes(char)) return false;
  }
  return true;
}
function isUniqueWithBitVector(str) {
  let checker = 0; // create a bit vector

  for (const char of str) {
    const value = char.charCodeAt(0) - "a".charCodeAt(0); // convert letter to number

    if ((checker & (1 << value)) !== 0) { // check the binary of the value and see if they both have value
      return false;
    }
    
    checker |= 1 << value; // market letter as seen
  }

  return true;
}

// console.log("isUniqeuWithMap()");
// console.log(isUniqeuWithMap("string")); // true
// console.log(isUniqeuWithMap("striiing")); // false
// console.log(isUniqeuWithMap("alphabet")); // false

// console.log("isUniqueWithSet()");
// console.log(isUniqueWithSet("string")); // true
// console.log(isUniqueWithSet("striiing")); // false

// console.log("isUnique()");
// console.log(isUnique("string")); // true
// console.log(isUnique("striiing")); // false
isUniqueWithBitVector("string")