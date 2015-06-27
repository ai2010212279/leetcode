/**
No.3 Longest Substring Without Repeating Characters
    Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
    大意：找到无重复字符串的最大子串
    基本思路：
    1.首先将每个字符出现的位置记录在数组之中；
    2.当某字符串再次出现的时候，认为出现了某个可能的最大子串，记录下这个值并且计算子串长度，并且将这个字符所在的位置设置为初始位置供下次计算子串长度使用。

    非自己写

 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    m = [];
    maxLen = 0;
    lastRepeatPos = -1;//设置为-1数组下标偏移
    for(i =0;i<s.length;i++){
         if (m[s[i]]!=null && lastRepeatPos < m[s[i]]) {
            lastRepeatPos = m[s[i]];
        }
        if ( i - lastRepeatPos > maxLen ){
            maxLen = i - lastRepeatPos;
        }
        m[s[i]] = i ;
    }

    return maxLen;
};
a = 'abcabcdbb';

b = lengthOfLongestSubstring(a);
console.log(b);
