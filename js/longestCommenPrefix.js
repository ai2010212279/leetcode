/**
    No.14 Longest Common Prefix
    Write a function to find the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 */
 /**
 思路：将字符串数组strs按照长度从小到大排序，然后按照长度1,2..,n的方式截取字符串strs[0]，逐一在数组内对strs[n]截取前缀进行比较。
 结束条件为： 1.当两个前缀不一致时，取比当前前缀长度少1 (即:i-1)的字符串作为前缀；
            2.以strs[0]字符串完成全部前缀匹配，取strs[0]为前缀;
*/
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) return "";
    prefix = "";
    strs.sort(function(a,b){
        return a.length > b.length ? 1 : -1;
    });

    for(i = 1;i <= strs[0].length;i++){
        prefix = strs[0].substring(0,i);
        for(j = 1;j < strs.length;j++){
            currentPrefix = strs[j].substring(0,i);
            if(prefix !== currentPrefix){
                prefix  = strs[0].substring(0,i-1);
                return prefix;
            }
        }
    }
    return strs[0];
};

/**
思路：开始时以prefix = strs[0]作为前缀进行匹配，如不能完全匹配所以字符串，则将prefix长度减少1之后再次重复以上动作。
结束条件：prefix能够匹配数组所有字符串的前缀。即 数组完成遍历。
这个方法效率稍高一些
*/
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) return "";

    strs.sort(function(a,b){
        return a.length > b.length ? 1 : -1;
    });

    for(i = strs[0].length ; i >= 0 ; i--){
        prefix = strs[0].substring(0,i);
        j = 1;
        while(j < strs.length){
            currentPrefix = strs[j].substring(0,i);
            if(currentPrefix !== prefix){
                break;
            }
            j++;
        }
        if(j === strs.length){
            break;
        }
    }
    return strs[0].substring(0,i);
};

a = ['abcd',"abc","abcdefg"];
c = ['aa','ab'];
d = [""];
b = longestCommonPrefix(a);
// b = "";
// console.log(b.substring(0,1));
console.log(b);
