/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function  (matrix) {
    var result = [];
    var xStep = 0;yStep = 1;
    var level = 0;
    var xMax = matrix.length - 1,xMin = 0;
    var yMax = matrix[0].length - 1,yMin = 0;
    for (var i = 0, j = 0; i >= xMin && i <= xMax && j >= yMin && j <= yMax; i+=xStep,j+=yStep){
        result.push(matrix[i][j]);
        //左上角拐弯
        if (j == yMin && i == xMin && xStep == -1){
            xStep = 0;
            yStep = 1;
            yMax -= 1;
            yMin += 1;
            continue;
        }
        //左下角拐弯
        if(i == xMax && j == yMin && yStep == -1){
            xStep = -1;
            yStep = 0;
            xMax -= 1;
            xMin += 1;
            continue;
        }
        //右上角拐弯
        if (i == xMin && j == yMax && yStep == 1){
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
    console.log(result);
    return result;
};

a = [[1,2,3],[4,5,6],[7,8,9]];
spiralOrder(a);

a = [[1,2,3,4],[5,6,7,8]];
spiralOrder(a);

a = [[1,2,3,4,5],[6,7,8,9,10],
    [11,12,13,14,15],[16,17,18,19,20]];
spiralOrder(a);

a = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
spiralOrder(a);
