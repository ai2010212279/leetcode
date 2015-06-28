/**
No.5 Longest Palindromic Substring
    Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.

    思路1：
    1.找到最短的回文，如bb，aa，11
    2.根据最短回文的位置向两边搜索回文的边界。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    middleLocation = -1;
    maxPalindromicLength = 0;
    for(i = 0 ;i < s.length - 1;i++){
        j = i + 1;
        palindromicLength = 0;
        while(s[i-palindromicLength] === s[j+palindromicLength]
            && s[i-palindromicLength] != null
            && s[j+palindromicLength] != null){
            palindromicLength++;
        }
        if(palindromicLength > maxPalindromicLength){
            maxPalindromicLength = palindromicLength;
            middleLocation = i;
        }
    }

    if(middleLocation != -1){
        startLocation = middleLocation - maxPalindromicLength + 1;
        endLocation = middleLocation + maxPalindromicLength;
        string = s.substring(startLocation,endLocation+1);
    }else{
        string = '';
    }
    return string;

};

s = 'abccba';

a = longestPalindrome(s);
console.log(a);
