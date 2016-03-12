/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var matrix = [];
    for (var i = 0; i < m; i++){
        if (matrix[i] == null){
            matrix[i] = [];
        }
        for (var j = 0; j < n; j++){
            if (obstacleGrid[i][j] == 1){
                matrix[i][j] = 0;
            }else if(i == 0 && j == 0){
                matrix[i][j] = obstacleGrid[i][j] == 1 ? 0 : 1;
            }else if (i == 0){
                matrix[i][j] = matrix[i][j-1];
            }else if (j == 0){
                matrix[i][j] = matrix[i-1][j];
            }else{
                matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
            }
        }
    }
    return matrix[m-1][n-1];
};

a = uniquePathsWithObstacles([[0,0,0,1],[1,1,0,1],[0,0,0,0][1,0,0,1]]);
console.log(a)

