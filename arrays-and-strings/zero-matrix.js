/**
 * Write an lgorithm such that if an element in an M x N 
 * matrix is 0, its entire row and column are set to 0.
 * 
 * Hints
 * - If you cleared the rows and cols as you found 0s, you'd likely
 *  wind up cleaning the whole matrix, Try finding the cells with 
 * zeros first before making any changes to the matrix.
 * - Can you use O(M + N) additional space insteaf od O(M x N)? 
 * What information do you really need from the list of cells that 
 * are zero?
 * - You probably need some data storage to maintain a list of the 
 * rows and columns that need to be zeroed. Can you reduce the 
 * additional space usage to O(1) by using the matrix itself for 
 * data storage?
 */

function zeroMatrix(arr) {
    let rows = arr.length;
    let cols = arr[0].length
    if (rows < 1 || cols < 1) return null;

    let newArr = Array(rows).fill(0).map(() => Array(cols).fill(0))

    let colWithZero = []
    let rowWithZero = []

    // see if row has a zero, and mark where its located
    for (let row = 0; row < rows; row++) {
        if (arr[row].includes(0)) {
            rowWithZero.push(row)
            for (let col = 0; col < cols; col++) {
                if (arr[row][col] === 0) {
                    colWithZero.push(col)
                }
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        // row doesnt have 0, fill in col nums 
        if (!rowWithZero.includes(row)) {
            for (let col = 0; col < cols; col++) {
                console.log("fill in row: " + row + " col: " + col)
                // col doesnt have 0, fill in with num
                if (!colWithZero.includes(col)) {
                    newArr[row][col] = arr[row][col]
                }
            }
        }  
    }

    return newArr;
}

function idealSolution(arr) {
    const rows = new Set();
    const cols = new Set();

    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[0].length; c++) {
            if (arr[r][c] === 0) {
                rows.add(r);
                cols.add(c);
            }
        }
    }

    const result = arr.map(row => [...row]);

    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[0].length; c++) {
            if (rows.has(r) || cols.has(c)) {
                result[r][c] = 0;
            }
        }
    }

    return result
}

console.log(idealSolution(
    [[1, 2, 3], [0, 2, 3], [2, 1, 0]]))
    // [[0, 2, 0], [0, 0, 0], [0, 0, 0]]
console.log(idealSolution(
    [[1, 2, 3, 0, 2, 8], [0, 2, 3, 10, 2, 2], [2, 1, 0, 2, 3, 4]]))
    // [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0]]
console.log(idealSolution(
    [[1, 2, 3, 200, 2], [0, 2, 3, 10, 2], [2, 1, 0, 2, 3], [2, 1, 1, 2, 3]]))
    // [[0, 2, 0, 200, 2], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 2, 3]]