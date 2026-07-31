/**
 * String Compression
 * 
 * Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become
 * a2b1c5a3. If the "compressed" string would not become smaller than the 
 * original string, your method should return the original string. You can 
 * assume the string has only uppercase and lowercase letters (a-z).
 * 
 * Hints
 * - Do the easy thing first. Compress the string, then compare the lengths.
 * - Be careful that you aren't repeatedly concatenating strings together.
 * This can be very inefficient.
 */
function stringCompression(str) {
    if (str.length <= 2) return str;

    let compressed = "";
    let current = str[0];
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === current) {
            count++;
        } else {
            compressed += current + count;
            current = str[i];
            count = 1;
        }
    }

    compressed += current + count;

    return compressed.length < str.length ? compressed : str;
}

console.log(stringCompression("string"))
console.log(stringCompression("aabcccccaaa"))