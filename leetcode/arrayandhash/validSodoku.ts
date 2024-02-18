/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
*/


//   1 2 3 | 4 5 6 | 7 8 9 
// 1 
// 2   2
// 3
//--
// 4
// 5
// 6
//--
// 7
// 8
// 9

function isValidSudoku(board: string[][]): boolean {
    const set = {}
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            const cell = board[i][j]
            if(cell === '.') {
                continue
            }
            const column = `column: ${j}; value: ${cell}`
            const row = `row: ${i}; value: ${cell}`
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3) 
            
            console.log(column,row,boxNumber)
            const box = `box: ${boxNumber}; value: ${cell}`

            if(set[column] || set[row] || set[box]) {
                return false
            }
            set[column] = true
            set[row] = true
            set[box] = true
        }
    }
    console.log(set)
    return true
};

// Time O(n^2) n * columns x n * rows
// Space O(n^2) n * column x n * rows

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))


console.log(isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))