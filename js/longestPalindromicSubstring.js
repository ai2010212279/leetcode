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
    maxPalindromicLength = 0;
    longestString = '';
    for(i = 0 ;i < s.length ;i++){
        string = findPalindromic(s,i,i);
        if(string.length > maxPalindromicLength){
            maxPalindromicLength = string.length;
            longestString  = string;
        }

        string = findPalindromic(s,i,i+1);
        if(string.length > maxPalindromicLength){
            maxPalindromicLength = string.length;
            longestString  = string;
        }
    }

    return longestString;
}

function findPalindromic (string,leftMiddle,rightMiddle) {
    while(string[leftMiddle] === string[rightMiddle]
            && leftMiddle >= 0
            && rightMiddle < string.length){
        leftMiddle--;
        rightMiddle++;
    }
    pString = string.substr(leftMiddle+1,rightMiddle-leftMiddle-1);//正确的长度为(right-1-(letf+1)+1)
    // console.log(leftMiddle-step1,rightMiddle-leftMiddle+2*step1);
    return pString;

}

s = 'bb13431abc';

a = longestPalindrome(s);
console.log(a);

s = 'abb';

a = longestPalindrome(s);
console.log(a);

s = 'aa';
a = longestPalindrome(s);
console.log(a);

