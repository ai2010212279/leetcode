
/**
Generate parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"

根据深度优先搜索来生成'('和')'。
 * @param {number} n
 * @return {string[]}

 use recursin resolve this problem
 */
var generateParenthesis = function(n) {
    var s = [];
    generate1('',n,n);
    return s;

    function generate1(parentheses,left,right){
        if(!left && !right && parentheses.length) return s.push(parentheses);
        if(left) generate1(parentheses+'(',left-1,right);
        if(right > left) generate1(parentheses+')',left,right-1);
    }
};
a = generateParenthesis(2);
console.log(a);

