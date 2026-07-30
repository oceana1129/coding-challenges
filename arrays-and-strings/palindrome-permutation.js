/**
 * Given a string, write a function to check if it is a permutation of a 
 * palindrome. A palindrome is a word or phrse that is the same forwards 
 * and backwards. A permutation is a rearrangement of letters. The 
 * palindrome does not need to be limited to just dictionary words. You 
 * can ignore casing and non-letter characters.
 * 
 * hints
 * - You do not hve to- and should not- generate all permutations. That would be very inefficient.
 * - What characters would a string that is a permutation have?
 * - Have you tried a hash table? You should be able to get this in O(n) time
 * - Can you reduce the space by using a bit vector?
 */
function isPalindromPermutation(str) {
    // is the string a permutation of a palindrome
    // strings may have different casing
    // and may have non letter characters
    const count = new Map();
    let newStr = str.replace(/[^a-zA-Z]+/g, "").toLowerCase()
    let oddNumCount= 0;
    const isOdd = newStr.length % 2 !== 0;
    
    for (let char of newStr) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    for (let item of count) {
        if (!isOdd) {
            if (item[1] % 2 !== 0) return false
        } else {
            if (item[1] % 2 !== 0) oddNumCount+= 1;
        }
        if (oddNumCount > 1) return false
    }
    return true;
}

console.log(isPalindromPermutation("care2rac")) // true
console.log(isPalindromPermutation("Tact Coa")) // true
console.log(isPalindromPermutation("stuff")) // false
console.log(isPalindromPermutation("Maadm, I'm Adam")) // true