/**
 * 7 kyu
Factorial
Your task is to write function factorial.
 */
function factorial(n){
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}