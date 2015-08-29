
/**
Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"

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
