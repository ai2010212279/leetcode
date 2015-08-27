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
        if(p[j] === "*"){
            if(p[j-1] === '.'){
                i++;
            }else if(p[j-1] === s[i]){
                i++;
            }else{
                j++;
            }
        }else{
            if(p[j] === '.'){
                j++;
                i++;
            }else if(p[j] === s[i]){
                j++;
                i++;
            }else{
                j++;
            }
        }
    }

    if(j == p.length && i < s.length){
        return false;
    }else{
        return true;
    }
};

a = isMatch("aa","a");
console.log(a);
a = isMatch("aa","aa");
console.log(a);
a = isMatch("aaa","aa");
console.log(a);
a = isMatch("aa", "a*");
console.log(a);
a = isMatch("aa", ".*");
console.log(a);
a = isMatch("ab", ".*");
console.log(a);
a = isMatch("aab", "c*a*b");
// a = isMatch("ab",".*c");
console.log(a);
a = isMatch('aa','*');
console.log(a);
a = isMatch('aa','a*');
console.log(a);

