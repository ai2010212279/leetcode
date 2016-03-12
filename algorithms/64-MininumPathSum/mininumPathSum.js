/**
 * time out of limit
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    result = Math.pow(2, 31) - 1;
    findPath(grid, 0, 0, 0);
    return result;
};

var findPath = function(grid, x, y, sum) {
    sum += grid[x][y];

    if (x == grid.length - 1 || y == grid[0].length - 1) {
        if (x == grid.length - 1 && y == grid[0].length - 1) {
            if (sum < result) {
                result = sum;
            }
            return;
        }
    }
    if (sum > result) {
        return;
    }

    if (x < grid.length - 1) {
        findPath(grid, x + 1, y, sum);
    }
    if (y < grid[x].length - 1) {
        findPath(grid, x, y + 1, sum);
    }
}

date1 = new Date().getTime();

a = minPathSum([[0,7,7,8,1,2,4,3,0,0,5,9,8,3,6,5,1,0],[2,1,1,0,8,1,3,3,9,9,5,8,7,5,7,5,5,8],[9,2,3,1,2,8,1,2,3,7,9,7,9,3,0,0,3,8],[3,9,3,4,8,1,2,6,8,9,3,4,9,4,8,3,6,2],[3,7,4,7,6,5,6,5,8,6,7,3,6,2,2,9,9,3],[2,3,1,1,5,4,7,4,0,7,7,6,9,1,5,5,0,3],[0,8,8,8,4,7,1,0,2,6,1,1,1,6,4,2,7,9],[8,6,6,8,3,3,5,4,6,2,9,8,6,9,6,6,9,2],[6,2,2,8,0,6,1,1,4,5,3,1,7,3,9,3,2,2],[8,9,8,5,3,7,5,9,8,2,8,7,4,4,1,9,2,2],[7,3,3,1,0,9,4,7,2,3,2,6,7,1,7,7,8,1],[4,3,2,2,7,0,1,4,4,4,3,8,6,2,1,2,5,4],[1,9,3,5,4,6,4,3,7,1,0,7,2,4,0,7,8,0],[7,1,4,2,5,9,0,4,1,4,6,6,8,9,7,1,4,3],[9,8,6,8,2,6,5,6,2,8,3,2,8,1,5,4,5,2],[3,7,8,6,3,4,2,3,5,1,7,2,4,6,0,2,5,4],[8,2,1,2,2,6,6,0,7,3,6,4,5,9,4,4,5,7]]);
date2 = new Date().getTime();
console.log(date2 - date1);
