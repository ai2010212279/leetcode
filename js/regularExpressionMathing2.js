/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    a = compare(s,0,p,0);

    return a ;
    function compare(s,i,p,j){
// console.log('b',i,j);
        if(i === s.length && j === p.length){
            return true;
        }

        if(p[j]!=='*' && p[j+1]==='*'){
            result = false;
            // console.log('a',i,j);
            while(i < s.length && j+1 < p.length){
                // console.log(i,j);
                result = compare(s,i,p,j+2);
                if(result){
                    return result;
                }
                ++i;
            }
            // console.log('*',i,j);
            if(i === s.length){
                return compare(s,i,p,j+2);
            }else{
                return false;
            }
        }else if(p[j] === '.' && i < s.length){
            // console.log('.',i,j);
            return compare(s,i+1,p,j+1);
        }else if(p[j] === s[i] && i < s.length){
            // console.log('=',i,j);
            return compare(s,i+1,p,j+1);
        }else{
            return false;
        }

    }
};



a = isMatch("aa","a");//false
console.log(a);
a = isMatch("aaa","aa");//false
console.log(a);
a = isMatch('aa','*');//false
console.log(a);
a = isMatch('ab','.*c');//false
console.log(a);
a = isMatch('a','ab*c***');//false
console.log(a);
a = isMatch('a','.*..');//false
console.log(a);
a = isMatch("aa", "a*");//true
console.log(a);
a = isMatch("aa", ".*");//true
console.log(a);
a = isMatch("aa","aa");//true
console.log(a);
a = isMatch("ab", ".*");//true
console.log(a);
a = isMatch("aab", "c*a*b");//true
// a = isMatch("ab",".*c");
console.log(a);
a = isMatch('a','a*');//true
console.log(a);
a = isMatch('aaa','a*aaa');//true
console.log(a);
a = isMatch('abcdef','.*def');//true
console.log(a);
a = isMatch("aaa", "ab*a*c*a");//true
console.log(a);
a = isMatch('aaaa','a*aaaaa*');//true
console.log(a);


