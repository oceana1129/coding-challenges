/**
 * 7 kyu
Divide and Conquer
 * Given a mixed array of number and string representations 
of integers, add up the non-string integers and subtract 
the total of the string integers.

Return as a number.
 */
function divCon(x) {
  let num = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") num += x[i];
    else num -= Number(x[i]);
  }
  return num;
}
