/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    dict = ['(',')','[',']','{','}'];
    stack = [];
    for(fast = 0;fast < s.length;fast++){
        if(dict.indexOf(s[fast]) % 2 === 0){
            stack.push(s[fast]);
            console.log(stack);
        }else{
            if(dict.indexOf(stack[stack.length-1]) + 1 === dict.indexOf(s[fast])){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};


a = "{[()]}";
a = "]]";
b = isValid(a);
console.log(b);
