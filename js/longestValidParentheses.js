/**
Longest Valid Parentheses
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var maxLength = 0;
    var tempLength = 0;
    var calculate = 0;
    for(i = 0;i < s.length;i++){
        if(s[i] == '('){
            calculate++;
        }else{
            calculate--;
            if(calculate >= 0){
                tempLength += 2;
            }else{
                maxLength = tempLength > maxLength ? tempLength : maxLength;
                calculate = 0;
                tempLength = 0;
            }
        }
    }
    return tempLength > maxLength ? tempLength : maxLength;
};

a = '(((())';
b = longestValidParentheses(a);
console.log(b);

a = '()()()(((())))';
b = longestValidParentheses(a);
console.log(b);

a = '((((((';
b = longestValidParentheses(a);
console.log(b);

a = '))))';
b = longestValidParentheses(a);
console.log(b);

a = ')())';
b = longestValidParentheses(a);
console.log(b);
