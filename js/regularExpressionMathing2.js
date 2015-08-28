/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    i = 0;
    j = 0;
    while(i < s.length && j < p.length){
        if(p[j] === "*"){
            if(p[j-1] === '.'){
                i++;
                if(j === p.length -1){
                    j++;
                }
            }else if(p[j-1] === s[i]){
                i++;
                if(j === p.length -1){
                    j++;
                }
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
    if(j == p.length && i == s.length){
        return true;
    }else{
        return false;
    }
};

// a = isMatch("aa","a");
// console.log(a);
// a = isMatch("aa","aa");
// console.log(a);
// a = isMatch("aaa","aa");
// console.log(a);
// a = isMatch("aa", "a*");
// console.log(a);
// a = isMatch("aa", ".*");
// console.log(a);
// a = isMatch("ab", ".*");
// console.log(a);
// a = isMatch("aab", "c*a*b");
// // a = isMatch("ab",".*c");
// console.log(a);
// a = isMatch('aa','*');
// console.log(a);
// a = isMatch('aa','a*');
// console.log(a);

// a = isMatch('ab','.*c');
// console.log(a);

a = isMatch('aaa','a*a');
console.log(a);
