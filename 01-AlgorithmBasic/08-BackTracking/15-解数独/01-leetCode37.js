/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    // Carl的解法
    function isValid(row, col, board, num) {
        // 判断行、列里是否重复
        for(let i = 0; i < 9; i++) {
            if(board[row][i] === num || board[i][col] === num) return false;
        }
        // 判断9方格里是否重复
        let r = Math.floor(row / 3);
        let c = Math.floor(col / 3);
        for(let i = r * 3; i < (r + 1) * 3; i++) {
            for(let j = c * 3; j < (c + 1) * 3; j++) {
                if(board[i][j] === num) return false;
            }
        }
        return true;
    }

    function backtracking() {
        for(let row = 0; row < board.length; row++) {  // 遍历行
            for(let col = 0; col < board[0].length; col++) {  // 遍历列
                if(board[row][col] === '.') {
                    for(let value = 1; value <= 9; value++) {  // (row, col) 这个位置放k是否合适
                        if(isValid(row, col, board, `${value}`)) {
                            board[row][col] = `${value}`;  // 放置k
                            if(backtracking()) return true;  // 如果找到合适一组立刻返回
                            board[row][col] = '.';  // 回溯，撤销k
                        }
                    }
                    return false;  // 9个数都试完了，都不行，那么就返回false 
                }
            }
        }
        return true;  // 遍历完没有返回false，说明找到了合适棋盘位置了
    }

    backtracking();
    return board;
};
let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
solveSudoku(board);
console.log(board);