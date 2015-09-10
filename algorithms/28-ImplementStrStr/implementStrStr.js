/**
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Update (2014-11-02):
The signature of the function had been updated to return the index instead of the pointer. If you still see your function signature returns a char * or String, please click the reload button  to reset your code definition.

思路：
1.先搜索needle的第一个字符，找到位置i后再按照needle的长度进行匹配。
2.如果不符合，则截取i+1至结尾，重复1步骤。
3.如果未找到返回-1。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var haystackCopy = haystack;
    i = 0;
    if(needle.length === 0) return 0;
    tempIndex = 0;
    while(haystackCopy.length > 0 || haystackCopy.length > needle.length){
        startIndex = searchChar(haystackCopy,needle[0]);
        tempIndex += startIndex;
        if(startIndex === -1){
            return -1;
        }
        searchTarget = haystackCopy.substr(startIndex,needle.length);
        if(searchTarget === needle){
            return tempIndex;
        }else{
            haystackCopy = haystackCopy.substr(startIndex + 1);
            tempIndex+=1;
        }
    }
    return -1;
};

function searchChar(haystack,character){
    return haystack.indexOf(character);
}

a = "";
b = "";
c = strStr("mississippi", "issip");
console.log(c);

