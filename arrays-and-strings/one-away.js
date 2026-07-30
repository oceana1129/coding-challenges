/**
 * There are three types of edits that can be performed on strings:
 * insert a chararacter, remove a character, or replace a character. 
 * Given two strings, write a function to check if they are one 
 * edit (or zero edits) away
 */
function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  const longer = str1.length >= str2.length ? str1 : str2;
  const shorter = str1.length >= str2.length ? str2 : str1;

  let i = 0;
  let j = 0;
  let foundDifference = false;

  while (i < longer.length && j < shorter.length) {
    if (longer[i] !== shorter[j]) {
        // already found a difference
      if (foundDifference) {
        return false;
      }

      foundDifference = true;

      if (longer.length === shorter.length) {
        // replacement
        i++;
        j++;
      } else {
        // insertion/removal
        i++;
      }
    } else {
      i++;
      j++;
    }
  }

  return true;
}

console.log(oneAway("pale", "pale"))
console.log(oneAway("pale", "ple"))
console.log(oneAway("pale", "bale"))
console.log(oneAway("pales", "pale"))
console.log(oneAway("pale", "bake"))
console.log(oneAway("pale", "paless"))