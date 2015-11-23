/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n == 0) return [];
    var matrix = [];
    var xStep = 0,
        yStep = 1;
    var xMax = n - 1,
        xMin = 0;
    var yMax = n - 1,
        yMin = 0;
    for (var i = 0, j = 0 ,x = 1;
        i >= xMin && i <= xMax && j >= yMin && j <= yMax;
        i += xStep, j += yStep,x++) {
        if (!matrix[i]) {
            matrix[i] = [];
        }
        matrix[i][j] = x;
        //左上角拐弯
        if (j == yMin && i == xMin && xStep == -1) {
            xStep = 0;
            yStep = 1;
            yMax -= 1;
            yMin += 1;
            continue;
        }
        //左下角拐弯
        if (i == xMax && j == yMin && yStep == -1) {
            xStep = -1;
            yStep = 0;
            xMax -= 1;
            xMin += 1;
            continue;
        }
        //右上角拐弯
        if (i == xMin && j == yMax && yStep == 1) {
            xStep = 1;
            yStep = 0;
            continue;
        }
        //右下角拐弯
        if (j == yMax && i == xMax && xStep == 1) {
            xStep = 0;
            yStep = -1;
            continue;
        }
    }
    console.log(matrix);
    return matrix;
};

generateMatrix(3);
