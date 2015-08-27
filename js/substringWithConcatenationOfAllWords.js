/**
Substring with Concatenation of All Words
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).

1.substr 3 个字符，判断是否在字符串数组之中，在，+n，不在，游标右移(i++)，长度计数器j++;
2.j++等于 数组长度时，判断结果值。

时间复杂度大概是 O(m^2*n) m为words的长度,n是s的长度
考虑最差情况：每次搜索子串相当于游标在i=n处进行了m次子串比较，和1次子串搜索(复杂度为O(m))即:m^2*n，
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var strIndexCount = 0;
    var wordsLength = words.length;
    var wordLength = words[0].length;
    var totalSum = ((0 + wordsLength-1)*wordsLength) / 2;
    var resultList = [];
    for(j = 0,i = 0,strNumberCount = 0;i < s.length;j++){
        startString = s.substr(i,wordLength);
        strIndex = words.indexOf(startString);
        if(strIndex >= 0 && strNumberCount < wordsLength){
            if(strNumberCount == 0){
                locationStack = i;
            }
            strIndexCount += strIndex
            strNumberCount++;
            if(strNumberCount === wordsLength && strIndexCount === totalSum){
                resultList.push(locationStack);
                i = locationStack + 1;
                locationStack = i;
                strNumberCount = 0;
                strIndexCount = 0;
            }else{
                i += wordLength;
            }
        }else{
            i = locationStack + 1;
            locationStack = i;
            strNumberCount = 0;
            strIndexCount = 0;
        }

    }
    console.log(j,s.length * words.length);
    return resultList;
};

a = "foobarfoobar";
c = ["foo","bar"];
b = findSubstring(a,c);
console.log(b);

a = "foo,barfoobargetfoo12316sbarfoo";
c = ["foo","bar","get"];
b = findSubstring(a,c);
console.log(b);

a = "abcd";
c = ['abcd','dddd'];
b = findSubstring(a,c);
console.log(b);

a = "bbbbbba";
c = ['bbb','bba'];
b = findSubstring(a,c);
console.log(b);



