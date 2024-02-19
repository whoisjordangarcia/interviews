// Medium
// Given a 2D matrix matrix, handle multiple queries of the following type:
// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// Implement the NumMatrix class:
// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// You must design an algorithm where sumRegion works on O(1) time complexity.

class NumMatrix {
  sumMatrix = [];
  constructor(matrix: number[][]) {
    console.log(matrix);
    const ROWS = matrix.length;
    const COLUMNS = matrix[0].length;
    for (var i = 0; i < ROWS + 1; i++) {
      this.sumMatrix[i] = new Array(COLUMNS + 1).fill(0);
    }
    // this.sumMatrix = Array.from({length: ROWS + 1}, () => new Array(COLUMNS + 1).fill(0))
    for (var r = 0; r < ROWS; r++) {
      let prefix = 0;
      for (var c = 0; c < COLUMNS; c++) {
        prefix += matrix[r][c];
        let above = this.sumMatrix[r][c + 1];
        this.sumMatrix[r + 1][c + 1] = prefix + above;
      }
    }
    console.log(this.sumMatrix);
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const r1 = row1 + 1; // top row
    const c1 = col1 + 1; // left column
    const r2 = row2 + 1; // bottom row
    const c2 = col2 + 1; // right column
    
    const bottomRight = this.sumMatrix[r2][c2]; // bottom row // right column
    const above = this.sumMatrix[r1 - 1][c2]; // top row // right column
    const left = this.sumMatrix[r2][c1 - 1]; // bottom row // left column (-1)
    const topLeft = this.sumMatrix[r1 - 1][c1 - 1]; // top row (-1) // left column (-1)

    console.log(bottomRight, above, left, topLeft)
    return bottomRight - above - left + topLeft;
  }
}

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
// [
//     [ 3, 0, 1, 4, 2 ],
//     [ 5, 6, 3, 2, 1 ],
//     [ 1, 2, 0, 1, 5 ],
//     [ 4, 1, 0, 1, 7 ],
//     [ 1, 0, 3, 0, 5 ]
// ]

// [row:2,column:1] [row:4,column:3]
// 8

// prefix
// [
//     [ 0, 0, 0, 0, 0, 0 ],
//     [ 0, 3, 3, 4, 8, 10 ],
//     [ 0, (8),  14,  18, (24), 27 ],
//     [ 0, [9,  17, 21, 28], 36 ],
//     [ 0, [13, 22, 26, 34], 49 ],
//     [ 0, [(14), 23, 30, (38)], 58 ]
//   ]
// bottomRight=38 
// topRight=24
// bottomLeft=14
// topLeft=8
// 38

// bottomRight(38) - BottomLeft(14) = 24
// topRight(24) - topLeft(8) = 16
// 8

// bottomRight(38) - topRight(24) = 14 - bottomLeft(14) = 0 + topLeft(8) = 8 
console.log(numMatrix.sumRegion(2, 1, 4, 3));
console.log(numMatrix.sumRegion(1, 1, 2, 2));
console.log(numMatrix.sumRegion(1, 2, 2, 4));

// Initialiation O(n^2)
// Time O(1)
// Space O(n^2)