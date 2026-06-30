/**
 * 6 kyu
Encrypt this!
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered
 by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the 
following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
 */
var encryptThis = function (text) {
  let arr = text.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let ascii = word.charCodeAt(0);

    if (word.length === 1) {
      arr[i] = ascii;
    } else if (word.length === 2) {
      arr[i] = ascii + word[1];
    } else {
      let second = word[1];
      let middle = word.slice(2, -1);
      let last = word[word.length - 1];

      arr[i] = ascii + last + middle + second;
    }
  }
  return arr.join(" ");
};
