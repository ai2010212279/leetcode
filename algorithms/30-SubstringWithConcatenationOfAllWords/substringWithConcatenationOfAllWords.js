/**
Substring with Concatenation of All Words
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).

1.substr 3 个字符，判断是否在字符串数组之中，在，+n，不在，游标右移(i++)，长度计数器+1;
2.j++等于 数组长度时，判断结果值。

时间复杂度大概是 O(m*n + m) m为words的长度,n是s的长度
考虑最差情况：每次搜索子串相当于游标在i=n处进行了m次子串比较即:m*n，

无法兼容 words中出现相同单词的情况，需要修改
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var wordsKeyMap = [];
    for(i = 0; i < words.length;i++){
        wordsKeyMap[words[i]] = 1;
    }
    words.sort();
    var wordsLength = words.length;
    var wordLength = words[0].length;
    var resultList = [];
    var tempArr = [];

    for(var j = 0,i = 0,strNumberCount = 0;j < s.length ;){
        startString = s.substr(j,wordLength);
        strIndex = wordsKeyMap[startString];
        if(strIndex){
            tempArr.push(startString);
            console.log(tempArr);
            if(tempArr.length === words.length){
                if(tempArr.sort().toString() === words.toString()){
                    resultList.push(i);//加入string
                }
                i++;
                j = i;
                tempArr = [];
            }else{
                j += wordLength;
            }
        }else{
            tempArr = [];
            i++;
            j = i;
        }
    }
    return resultList;
};

// a = "123foobarfoobar";
// c = ["foo","bar"];
// b = findSubstring(a,c);
// console.log(b);

// a = "foo,barfoobargetfoo12316sbarfoo";
// c = ["foo","bar","get"];
// b = findSubstring(a,c);
// console.log(b);

// a = "abcd";
// c = ['abcd','dddd'];
// b = findSubstring(a,c);
// console.log(b);

// a = "bbbbbba";
// c = ['bbb','bba'];
// b = findSubstring(a,c);
// console.log(b);

a = "abcabcabcdddddd";
c = ['abc','abc','ddd','ddd']
b = findSubstring(a,c);
console.log(b);


