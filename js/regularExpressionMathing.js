/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 匹配规则：
 . 等于所有字符
 无. 无* 则直接比较字符串
 . * 匹配任何字符串
 *匹配那个字符
 */
var isMatch = function(s, p) {
    i = 0;
    j = 0;
    while(i < s.length && j < p.length){
        if(p[j] === '*'){
            while((s[i] === p[j-1] || p[j-1] === '.') && i < s.length){
                i++;
            }
            var tempIndex = 0;
            while((p[j+tempIndex+1] === p[j-1] || p[j-1] ==='.')
                && p[j+tempIndex+1] != '*'
                && j+tempIndex+1 < p.length){
                tempIndex++;
            }
            if(p[j+tempIndex+1] === '*'){
                tempIndex--;
            }
            j++;
            i -= tempIndex;
            console.log(i,j);
        }else if(p[j] === '.'){
            i++;
            j++;
        }else if(s[i] === p[j]){
            i++;
            j++;
        }else{
            j++;
        }
    }
console.log(i,j);
    if(i === s.length && p[j] === '*'){
        j++;
    }else if( i=== s.length && p[j+1] === '*'){
        while(p[j+1] === '*'){
            if(p[j] === '*'){
                break;
            }
            j += 2;
        }
    }
    return i===s.length && j===p.length;
};

// a = isMatch("aa","a");
// a = isMatch("aa","aa");
// a = isMatch("aaa","aa");
// a = isMatch("aa", "a*");
// a = isMatch("aa", ".*");
// a = isMatch("ab", ".*");
// a = isMatch("aab", "c*a*b");
// console.log(a);
// a = isMatch('a','a*');//true
// console.log(a);
// a = isMatch("ab",".*c");
// console.log(a);

// a = isMatch("aa","a");//false
// console.log(a);
// a = isMatch("aa","aa");//true
// console.log(a);
// a = isMatch("aaa","aa");//false
// console.log(a);
// a = isMatch("aa", "a*");//true
// console.log(a);
// a = isMatch("aa", ".*");//true
// console.log(a);
// a = isMatch("ab", ".*");//true
// console.log(a);
// a = isMatch("aab", "c*a*b");//true
// // a = isMatch("ab",".*c");
// console.log(a);
// a = isMatch('aa','*');//false
// console.log(a);
// a = isMatch('a','a*');//true
// console.log(a);

// a = isMatch('ab','.*c');//false
// console.log(a);

// a = isMatch('aaa','a*a');//true
// console.log(a);

// a = isMatch('abcdef','.*def');//true
// console.log(a);

// a = isMatch('aaaa','a*aaaaa*b');//true
// console.log(a);

// a = isMatch('a','ab*c***');//false
// console.log(a);

a = isMatch("aaa", "ab*a*c*a");//true
console.log(a);
