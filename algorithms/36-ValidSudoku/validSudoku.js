/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var numbers = [];
    for (x = 0; x < 9; x++) {
        for (y = 0; y < 9; y++) {
            if (board[x][y] != '.') {
                if (!numbers[board[x][y]]) {
                    numbers[board[x][y]] = [];
                }
                temp = [];
                temp['x'] = x;
                temp['y'] = y;
                numbers[board[x][y]].push(temp);
            }
        }
    }

    for (i = 1; i <= 9; i++) {
        if(!numbers[i]){
            numbers[i] = [];
        }
        for (j = 0; j < numbers[i].length; j++) {
            for (k = j + 1; k < numbers[i].length; k++) {
                //同一行有相等值
                if (numbers[i][j]['x'] == numbers[i][k]['x']) {
                    return false;
                }
                //同一列有相等值
                if (numbers[i][j]['y'] == numbers[i][k]['y']) {
                    return false;
                }
                //同矩阵中有相同值
                if (inMatrix(numbers[i][j], numbers[i][k])) {
                    return false;
                }
            }
        }
    }

    return true;
};

var inMatrix = function(location1, location2) {
    var startX = parseInt(location1['x'] / 3) * 3;
    var startY = parseInt(location1['y'] / 3) * 3;
    var endX = startX + 2;
    var endY = startY + 2;
    if (location2['x'] >= startX && location2['x'] <= endX && location2['y'] >= startY && location2['y'] <= endY) {
        return true;
    }
    return false;
}


matrix = [];
matrix[0] = ['5','3','.','.','7','.','.','.','.'];
matrix[1] = ['6','.','.','1','9','5','.','.','.'];
matrix[2] = ['.','9','8','.','.','.','.','6','.'];
matrix[3] = ['8','.','.','.','6','.','.','.','3'];
matrix[4] = ['4','.','.','8','.','3','.','.','1'];
matrix[5] = ['7','.','.','.','2','.','.','.','6'];
matrix[6] = ['.','6','.','.','.','.','2','8','.'];
matrix[7] = ['.','.','.','4','1','9','.','.','5'];
matrix[8] = ['.','.','.','.','8','.','.','7','9'];
matrix = [".87654321","2........","3........","4........","5........","6........","7........","8........","9........"];
matrix = ["..5.....6","....14...",".........",".....92..","5....2...",".......3.","...54....","3.....42.","...27.6.."];
a = isValidSudoku(matrix);
console.log(a);
