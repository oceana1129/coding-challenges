/**
 * 4 kyu
Human readable duration format
Your task in order to complete this Kata is to write a function which 
formats a duration, given as a number of seconds, in a human-friendly 
way.

The function must accept a non-negative integer. If it is zero, it 
just returns "now". Otherwise, the duration is expressed as a 
combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 
24 hours.

Note that spaces are important.
 */
function formatDuration (seconds) {
  if (seconds === 0) return "now";
  
  let unitName = ["year", "day", "hour", "minute", "second"]
  let unitArr = [(365 * 24 * 60 * 60), (24 * 60 * 60), (60 * 60), 60, 1]
  let currentArr = Array(5).fill(0)
  let strArr = []
  let current = seconds;
  let str = ""

  for (let i = 0; i < unitArr.length; i++) {
    if (current >= unitArr[i]) {
      currentArr[i] = Math.floor(current / unitArr[i])
      current -= currentArr[i] * unitArr[i]
      strArr.push(currentArr[i] > 1 ? `${currentArr[i]} ${unitName[i]}s` : `${currentArr[i]} ${unitName[i]}`)
    }  
  }
  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) 
      str += strArr[i];
    else if (i === strArr.length - 1) 
      str += ` and ${strArr[i]}`
    else 
      str += `, ${strArr[i]}`
  } 
  
  return str
}
