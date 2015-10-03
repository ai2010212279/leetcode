/**
 * @param {number[]} height
 * @return {number}
 * 复杂度 O(mn);
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
    var maxHeight = uniqueH[uniqueH.length - 1];
    var totalWater = maxHeight * height.length;
    // console.log(totalWater);
    for (var k = 0; k < uniqueH.length; k++){
        changeH = 0;
        if(k > 0){
            changeH = uniqueH[k] - uniqueH[k - 1];
        }
        temp = takeOver(height,uniqueH[k],changeH);
        totalWater -= temp;
    }

    return totalWater - solid;
};

/**
 * 获取小于目标高度的数量
 * @param  {number[]} height
 * @param  {number} target
 * @return {number}
 */
var takeOver = function(height,target,changeH){
    var temp = 0;
    for (var i = 0; i < height.length; i++){
        if (height[i] < target){
            temp += changeH;
        }else{
            break;
        }
    }

    for (var j = height.length - 1; j > -1; j--){
        if (height[j] < target){
            temp += changeH;
        }else{
            break;
        }
    }
// console.log(temp);
    return temp;
}
// a = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// // b = Math.max.apply({},a);
// b = trap(a);
// console.log(b);

// a = [];
// b = trap(a);
// console.log(b);

// a = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// b = trap(a);
// console.log(b);

// a = [1, 2, 3, 4, 5, 6, 7, 8];
// b = trap(a);
// console.log(b);

a = [0, 4,2,0];
b = trap(a);
console.log(b);

// a = [4, 2, 3];
// b = trap(a);
// console.log(b);

// a = [5, 3, 1, 3, 1, 3, 5];
// b = trap(a);
// console.log(b);
