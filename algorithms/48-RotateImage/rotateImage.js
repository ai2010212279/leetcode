/**
 * @param {number[][]} matrix
 * @return
 * 思路：将数据进行旋转交换，主要难点在于换位的计算
 */

var rotate = function(matrix) {
    var k = 0;
    var length = parseInt(matrix.length / 2);
    while (k < length) {
        var i = k,
            j = k;
        while (j < matrix.length -1  - i) {
            var upperLeft = {
                'x': i,
                'y': j
            };
            var upperRight = {
                'x': j,
                'y': matrix.length - 1 - i
            };
            var rightLower = {
                'x': matrix.length - 1 - i,
                'y': matrix.length - 1 - j
            };
            var leftLower = {
                'x': matrix.length - 1 - j,
                'y': i
            };
            temp = matrix[upperLeft.x][upperLeft.y];
            matrix[upperLeft.x][upperLeft.y] = matrix[leftLower.x][leftLower.y];
            matrix[leftLower.x][leftLower.y] = matrix[rightLower.x][rightLower.y];
            matrix[rightLower.x][rightLower.y] = matrix[upperRight.x][upperRight.y];
            matrix[upperRight.x][upperRight.y] = temp;
            j++;
        }
        k++;
    }

}

a = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
]
rotate(a);
console.log(a);
rotate(a)
console.log(a);
rotate(a)
console.log(a);
rotate(a)
console.log(a);
a = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
];
rotate(a);
console.log(a);

a = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];
rotate(a);
console.log(a);

a = [
    [1]
];
rotate(a);
console.log(a);
