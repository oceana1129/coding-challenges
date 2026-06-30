/**
 * 7 kyu
 * row weights
 * Several people are standing in a row divided into two teams. 
 * The first person goes into team 1, the second goes into team 
 * 2, the third goes into team 1, and so on.

Task

Given an array of positive integers (the weights of the people),
 return a new array / tuple of two integers (depending on your
  language), whereby the first one is the total weight of team 1, 
  and the second one is the total weight of team 2. Note that 
  the array will never be empty.
 */
function rowWeights(array){
  let team = [0, 0]
  let odd = true;
  for (let i = 0; i < array.length; i++) { 
    if (odd) 
      team[0] = array[i] + team[0]     
    else 
      team[1] = array[i] + team[1]
    odd = !odd
  }
  return team;
}