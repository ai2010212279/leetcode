




/**
 * time complexity o(m*n) , space complexity o(m*n)
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m == 1) return 1;
    if (n == 1) return 1;
    matrixa = matrix(m, n);
    return matrixa[m-1][n-1];
};

var matrix = function(m, n) {
    var a = [];
    for (var i = 0; i < m; i++) {
        if (a[i] == null) {
            a[i] = []
        }
        for (var j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                a[i][j] = 1;
            } else {
                a[i][j] = a[i - 1][j] + a[i][j - 1];
            }
        }
    }
    return a;
}

a = uniquePaths(1,1);
console.log(a);

a = uniquePaths(1,3);
console.log(a);
a = uniquePaths(3,1);
console.log(a);
a = uniquePaths(2,3);
console.log(a);
a = uniquePaths(5,5);
console.log(a);
a = uniquePaths(3,10);
console.log(a);
