
/**
Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"
思路：类似生成一个三叉树，每次都在原先的基础上在左边，右边，外边添加一个括号。左边和右边添加括号
后可能相等。去重即可。
复杂度O(2^n);
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n <= 0 ) return [];
    step = "()";
    result = ["()"];
    for(i = 1;i < n;i++){
        temp = [];
        for(j = 0; j < result.length;j++){
            temp1 = addLeft(result[j]);
            temp2 = addRight(result[j]);
            temp3 = addInside(result[j]);
            if(temp1 === temp2){
                temp.push(temp2);
            }else{
                temp.push(temp1);
                temp.push(temp2);
            }
            temp.push(temp3);
        }
        result = temp;
    }

    // return result.sort(function(a,b){
        // return a >= b ? 1 : -1;
    // });
    return result;
};

function addLeft(element){
    return  "()" + element;
}

function addRight(element){
    return element + "()";
}

function addInside(element){
    return "(" + element + ")";
}

a = 5;
b = generateParenthesis(a);
console.log(b);


[ '(((())))','((()()))','((())())','((()))()','(()(()))','(()()())','(()())()','(())()()',
'()((()))','()(()())','()(())()','()(())()','()()(())','()()()()' ]

["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())",
"(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
