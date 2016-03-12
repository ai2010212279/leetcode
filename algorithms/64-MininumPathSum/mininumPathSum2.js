/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var matrix = [];
    for (var i = 0; i < m; i++){
        if (matrix[i] == null){
            matrix[i] = [];
        }
        if (i == 0){
            matrix[0][0] = grid[0][0];
        }else {
            matrix[i][0] = matrix[i-1][0] + grid[i][0];
        }
    }
    for (var j = 1; j < n; j++){
        if (matrix[0][j] == null){
            matrix[0][j] = Math.pow(2,31)-1;
        }
        matrix[0][j] = matrix[0][j-1] + grid[0][j];
    }
    for (var i = 1; i < m; i ++){
        for (var j = 1; j < n; j++){
            var minNum = matrix[i-1][j] < matrix[i][j-1] ? matrix[i-1][j] : matrix[i][j-1];
            matrix[i][j] = minNum + grid[i][j];
        }
    }
    return matrix[m-1][n-1];
};

date1 = new Date().getTime();

a = minPathSum([[1,3,1],[1,5,1],[4,2,1]]);
date2 = new Date().getTime();
console.log(a);
// console.log(date2 - date1);
