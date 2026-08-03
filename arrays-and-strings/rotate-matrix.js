/**
 * Rotate Matrix
 * 
 * Given an image represented by an N x N matrix, where each pixel in 
 * the image is represented by an integer, write a method to rotate 
 * the imge by 90 degrees. Can you do this in place?
 * 
 * Hints
 * - Try thinking about it layer by layer. Can you rotate a specific layer?
 * - Rotating a specific layer would mean swapping the values in four arrays.
 * If you were asked to swap the values in two arrays, could you do this? 
 * Can you then extend it to four arrays?
 */
// function rotateMatrix(arr) {
//     // [1, 2, 3]
//     // [4, 5, 6], 
//     // [7, 8, 9]
//     // rotated 90 degrees
//     // [7, 4, 1],
//     // [8, 5, 6],
//     // [9, 6, 3]

//     let n = arr.length
//     if (n < 1) return arr;
//     let newArr = Array(n).fill(0).map(() => Array(n).fill(0))

//     for (let row = 0; row < n; row++) {
//         for (let col = 0; col < n; col++) {
//             newArr[col][n - 1 - row] = arr[row][col];
//         }
//     }
//     return newArr;
// }








/**
 * Rotate Matrix
 * 
 * Given an image represented by an N x N matrix, where each pixel in 
 * the image is represented by an integer, write a method to rotate 
 * the imge by 90 degrees. Can you do this in place?
 * 
 * Hints
 * - Try thinking about it layer by layer. Can you rotate a specific layer?
 * - Rotating a specific layer would mean swapping the values in four arrays.
 * If you were asked to swap the values in two arrays, could you do this? 
 * Can you then extend it to four arrays?
 */
function rotateMatrix(arr) {
    let n = arr.length;
    if (n < 1) return arr
    let newArr = Array(n).fill(0).map(() => Array(n).fill(0));
    //[[1, 2, 3],
    // [4, 5, 6],
    // [7, 8, 9]]

    // into
    //[[7, 4, 1],
    // [8, 5, 2],
    // [9, 6, 3]]
    // row // col
    // 1: [0][0] -> [0][2]
    // 2: [0][1] -> [1][2]
    // 3: [0][2] -> [2][2]
    // 4: [1][0] -> [0][1]
    // 5: [1][1] -> [1][1]
    // 6: [1][2] -> [2][1]


    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            console.log(`num: ${arr[row][col]} \nrow: ${row} & col: ${col}`)
            newArr[col][n - 1 - row] = arr[row][col]
        }
    }
    return newArr;
}


console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(rotateMatrix([[1, 2, 3, 2, 1], [4, 5, 6, 5, 4], [7, 8, 9, 8, 7], [4, 5, 6, 5, 4], [1, 2, 3, 2, 1]],))