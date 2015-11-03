/**
 * @param {number[]} nums
 * @return {number}
 * 注：参考《算法导论》第24章 单源最短路径,代码适当修改后可获取路径。
 */
var jump = function(nums) {
    var everyNodeMinLength = [];
    var pre = null;
    for (var i = 0; i < nums.length; i++){
        if(i == 0){
            minLength = 0;
        }else{
            minLength = Number.MAX_SAFE_INTEGER;
        }
        var v = new node(i,minLength,pre);
        everyNodeMinLength.push(v);
    }

    var weight = 1;
    for (var i = 0; i < nums.length; i++){
        for (var j = 1; j <= nums[i] && i + j < nums.length;  j++){
            relax(everyNodeMinLength[i],everyNodeMinLength[i+j],weight);
        }
    }
    var lastNode = everyNodeMinLength.pop();
    return lastNode.minLength;

}

var node = function(index,minLength,pre){
    this.minLength = minLength;
    this.pre = null;
    this.index = index;
}

var relax = function(preNode,nextNode,weight){
    if (preNode.minLength + 1 < nextNode.minLength){
        nextNode.minLength = preNode.minLength + 1;
        nextNode.pre = preNode.index;
    }
}

a = [8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5];
b = jump(a);
console.log(b);
