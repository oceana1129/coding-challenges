/**
 * 7 kyu
Find the divisors!
Create a function named divisors/Divisors that 
takes an integer n > 1 and returns an array with 
all of the integer's divisors(except for 1 and 
the number itself), from smallest to largest. If 
the number is prime return the string '(integer) 
is prime' (null in C#, empty table in COBOL) (use 
Either String a in Haskell and Result<Vec<u32>, 
String> in Rust).

Examples:

divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"
 */
function divisors(integer) {
  let half = Math.floor(integer / 2)
  let arr = [];
  let isEven = integer % 2 == 0
  let increment = isEven ? 1 : 2;
  let start = isEven ? 2 : 3;
  for (let i = start; i <= half; i+=increment) {
    if (Number.isInteger(integer / i))
      arr.push(i);
  }
  
  return arr.length >= 1 ? arr : `${integer} is prime`
}