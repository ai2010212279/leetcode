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
    for(i = 0,strNumberCount = 0;i < s.length;){
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
    return resultList;
};

a = "foobarfoobar";
c = ["foo","bar"];
b = findSubstring(a,c);
console.log(b);

a = "foo,barfoobargetfoo123123getbarfoo";
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



