/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    // Carl的解法
    // n 为输入的棋盘大小
    function isValid(row, col, chessboard, n) {
        // 检查列
        for(let i = 0; i < row; i++) {  // 这是一个剪枝
            if(chessboard[i][col] === 'Q') return false;
        }
        // 检查 45度角是否有皇后
        for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if(chessboard[i][j] === 'Q') return false;
        }
        // 检查 135度角是否有皇后
        for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if(chessboard[i][j] === 'Q') return false;
        }
        return true;
    }

    function transformChessBoard(chessboard) {
        let chessBoardBack = [];
        chessboard.forEach(row => {
            let rowStr = '';
            row.forEach(value => {
                rowStr += value;
            });
            chessBoardBack.push(rowStr);
        });
        return chessBoardBack;
    }
    
    // row 是当前递归到棋盘的第几行了
    function backtracking(row, chessboard) {
        if(row === n) {
            res.push(transformChessBoard(chessboard));
            return;
        }
        for(let col = 0; col < n; col++) {
            if(isValid(row, col, chessboard, n)) {  // 验证合法就可以放
                chessboard[row][col] = 'Q';  // 放置皇后
                backtracking(row + 1, chessboard);
                chessboard[row][col] = '.';  // 回溯，撤销皇后
            }
        }
    }

    let res = [];
    let chessboard = new Array(n).fill([]).map(() => new Array(n).fill('.'));
    backtracking(0, chessboard);
    return res;
};
console.log(solveNQueens(4));