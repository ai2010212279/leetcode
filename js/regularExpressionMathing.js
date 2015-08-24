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
    whileFlag = true;
    regularFlag = true;
    while(whileFlag){
        if(j>p.length && i <= s.length) {
            console.log(1);
            regularFlag = false;
            whileFlag = false;
        }

        currentChar = s[i]
        if(i > s.length && j < p.length){
            console.log(2);
            currentChar = "";
        }

        if(i >= s.length && j >= p.length ){
            console.log(4);
            // regularFlag = true;
            whileFlag = false;
        }

        if(p[j] == "."){
            console.log(5);
            i++;
            j++;
            continue;
        }
        if(p[j] == "*"){
            console.log(6);
            while(currentChar === s[i-1]){
            console.log(7);
                i++;
            }
            j++;
                console.log(i,j);
            continue;
        }

        if(currentChar === p[j] && currentChar != undefined){
            console.log(8);
            console.log(currentChar,p[j]);
            i++;
            j++;
            continue;
        }else{
            if(p[j+1] === "*"){
            console.log(9);
                while(currentChar === s[i-1]){
            console.log(10);
                    i++;
                }
                j++;
                console.log(i,j);
                continue;
            }else{
            console.log(11);
                regularFlag = false;
                whileFlag = false;
                continue;
            }

        }
    }

    return regularFlag;
};

// a = isMatch("aa","a");
// a = isMatch("aa","aa");
// a = isMatch("aaa","aa");
// a = isMatch("aa", "a*");
// a = isMatch("aa", ".*");
// a = isMatch("ab", ".*");
a = isMatch("aab", "c*a*b");
// a = isMatch("ab",".*c");
console.log(a);

