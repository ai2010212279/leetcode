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

    middleLocation = 0;
    maxPalindromicLength = 0;
    repeatType = 1 ;// 0 => bb 1=>abcba
    for(i = 0 ;i <= s.length - 1;i++){
        j = i + 1;
        step0 = 0;
        palindromicLength = 0;

        if(s[i-step0] === s[j+step0]){
            while(s[i-step0] === s[j+step0]
            && s[i-step0] != null
            && s[j+step0] != null){
                palindromicLength += 2;
                step0++;
            }
            if(palindromicLength > maxPalindromicLength){
                maxPalindromicLength = palindromicLength;
                middleLocation = (i + j)/2;
                repeatType = 0;
            }
        }

        step1 = 0;
        palindromicLength1 = 0;

        while(s[i-step1] === s[i+step1]
            && s[i-step1] != null
            && s[i+step1] != null){
            if(palindromicLength1 === 0){
                palindromicLength1++;
            }else{
                palindromicLength1 += 2;
            }
            step1++;
        }

        if(palindromicLength1 > maxPalindromicLength){
            maxPalindromicLength = palindromicLength1;
            middleLocation = i;
            repeatType = 1;
        }
    }

    if(repeatType === 0){
        startLocation = Math.ceil(middleLocation) - (maxPalindromicLength/2);
        string = s.substr(startLocation,maxPalindromicLength);
    }else if(repeatType === 1){
        startLocation = middleLocation - ((maxPalindromicLength-1)/2);
        string = s.substr(startLocation,maxPalindromicLength);
    }else{
        string = '';
    }

    return string;

};

s = 'bb13431abc';

a = longestPalindrome(s);
console.log(a);

s = 'abb';

a = longestPalindrome(s);
console.log(a);

s = 'a';
a = longestPalindrome(s);
console.log(a);

