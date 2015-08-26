/**
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Update (2014-11-02):
The signature of the function had been updated to return the index instead of the pointer. If you still see your function signature returns a char * or String, please click the reload button  to reset your code definition.

 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var haystackCopy = haystack;
    i = 0;
    while(haystackCopy.length > 0 || haystackCopy.length > needle.length){
        startIndex = searchChar(haystackCopy,needle[0]);
        if(startIndex === -1){
            return -1;
        }
        searchTarget = haystackCopy.substr(startIndex,needle.length);
        if(searchTarget == needle){
            return startIndex;
        }else{
            haystackCopy = haystackCopy.substr(startIndex + 1);
        }
    }
    return -1;
};

function searchChar(haystack,character){
    return haystack.indexOf(character);
}

a = "xuyang_pxlxdxy";
b = "xid";
c = strStr(a,b);
console.log(c);
