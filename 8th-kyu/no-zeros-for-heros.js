/**
 * 8 kyu
No zeros for heroes
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
 */
function noBoringZeros(n) {
  if (n === 0) return 0;
  let arr = n.toString().split("")
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "0") break;
    else arr.pop()
  }
  return Number(arr.join(""))
}