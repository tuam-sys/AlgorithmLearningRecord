/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    // 官方解法
    if(!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
    const total = rows * cols;
    const order = new Array(total).fill(0);

    let directionIndex = 0;
    let row = 0;
    let column = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for(let i = 0; i < total; i++) {
        order[i] = matrix[row][column];
        visited[row][column] = true;
        const nextRow = row + directions[directionIndex][0];
        const nextCol = column + directions[directionIndex][1];
        if(!(0 <= nextRow && nextRow < rows && 0 <= nextCol && nextCol < cols && !(visited[nextRow][nextCol]))) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return order;
};
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
// let matrix = [[6, 9, 7]];
let matrix = [[2,5],[8,4],[0,-1]];
console.log(spiralOrder(matrix));