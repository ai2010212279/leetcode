/**
 * @param {number[]} height
 * @return {number}
 * 最差复杂度n^2  当数列为降序的时候发生这种情况
 * 思路：
 * 假设有数列[4, 2, 3]
 * 1.从index = 0开始，将其作为容器左边，向右寻找大于height[index] 的第一个数（在本例中为大于4），即为容器的右边;
 * 2.如果找到，则计算水的体积，并且容器的右边转变为容器左边；如果没有找到符合要求的容器的右边，则容器的右边的高度需要进行降低（本例中降为3），然后重复1；
 * 3.容器左边到达倒数第二位或者最后一位时结束计算。
 */
var trap = function(height) {
    if (height.length < 3)  return 0;
    uniqueH = [];
    var solid = 0;
    for (var i = 0; i < height.length; i++){
        if(uniqueH.indexOf(height[i]) === -1){
            uniqueH.push(height[i]);
        }
        solid += height[i];
    }
    uniqueH.sort(function(a,b){
        return a > b ? 1 : -1;
    });

    var i = 0;
    var waters = 0;
    while(i < height.length - 1){
        var j = i + 1;
        var index = uniqueH.indexOf(height[i]);
        var tempSolid = 0;
        var tempWaters = 0;
        while ( j < height.length){
            rightH = uniqueH[index];
            // console.log(j);
            if(height[j] >= rightH){
                //计算水的体积。
                minHeight = Math.min(height[i],height[j]);
                length = j - i - 1;
                tempWaters = minHeight * length - tempSolid;
                waters += tempWaters;
                i = j;
                break;
            }else{
                tempSolid += height[j];
                j++
            }
            if(j === height.length){
                tempSolid = 0;
                tempWaters = 0;
                index--;
                j = i + 1;
            }
        }
    }
    return waters;
};

a = [0, 4,2,0];//0
b = trap(a);
console.log(b);

a = [4, 2, 3];//1
b = trap(a);
console.log(b);

a = [5, 3, 1, 3, 1, 3, 5];//14
b = trap(a);
console.log(b);

a = [1, 2, 3, 4, 5, 6, 7, 8];//0
b = trap(a);
console.log(b);

a = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];//6
b = trap(a);
console.log(b);

a = [];//0
b = trap(a);
console.log(b);

a = [9, 8, 7, 6, 5, 4, 3, 2, 1];//0
b = trap(a);
console.log(b);
