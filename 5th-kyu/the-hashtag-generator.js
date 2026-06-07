/**
 * 5 kyu
The Hashtag Generator
The marketing team is spending way too much 
time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized, 
and remaining letters lowercased.
If the final result is longer than 140 chars 
it must return false.
If the input or the result is an empty string 
it must return false.
Examples

" Hello there thanks for trying my Kata"  
=>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  
=>  "#HelloWorld"
""                                        
=>  false
 */
// we are taking in a string
// smallest it can be is ""

// returning either a valid string or false
// false values include:
//// final result string over 140 characters
//// empty string
// valid results include:
//// string starting with a hashtag #
//// string with each word capitalized
//// all spaces removed
function generateHashtag (str) {
  let arr = str.split(" ").map(e => e.replace("/s+/g", "")).filter(e => e !== "");
  if (arr.length == 0) return false;
  arr = arr.map(e => e[0].toUpperCase() + e.slice(1))
  let newStr = arr.join("");
  if (newStr.length > 139) return false;
  return "#" + newStr;
}