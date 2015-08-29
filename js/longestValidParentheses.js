/**
Longest Valid Parentheses
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

 * @param {string} s
 * @return {number}

 */
// var longestValidParentheses = function(s) {
//     var leftDeep = 0,rightDeep = 0;
//     var longestParentheses = 0;
//     var temp2 = 0,temp1 = 0;
//     for(i = 0;i < s.length;i++){
//         if(s[i] == '('){
//             leftDeep++;
//         }
//         if(s[i] == ')'){
//             rightDeep++;
//             if(leftDeep >= rightDeep){
//                 leftDeep--;
//                 rightDeep--;
//                 temp2 += 2;
//                 if(leftDeep==0){
//                     temp1 += temp2;
//                     temp2 = 0;
//                 }
//             }else{
//                 rightDeep--;
//                 longestParentheses = longestParentheses > temp1 ? longestParentheses : temp1;
//                 temp1 = 0;
//             }
//         }
//     }
//     longestParentheses = longestParentheses > temp1 ? longestParentheses : temp1;
//    console.log(leftDeep,temp1,temp2);
//     longestParentheses = longestParentheses > temp2 ? longestParentheses : temp2;

//     return longestParentheses;
// };

// var longestValidParentheses = function(s) {
//     var i = 0;
//     var leftDeep = 0;
//     while(i < s.length){
//         if(s[i] == '('){
//             if(s[i+1] == '('){
//                 leftDeep++;
//             }else if(s[i+1] == ')'){
//                 leftDeep--;
//             }
//         }
//     }

// }

var longestValidParentheses = function(s) {
    var i = 0,j = 0;
    var tempArr = [];
    while(i < s.length){
        if(s[i] === '('){
            tempArr.push(i);
            j = tempArr.length - 1;
        }else{
            if(s[tempArr[j]] === '('){
                tempArr[j] = -1;
                tempArr.push(-1);
            }else if(tempArr[j] === -1){
                while(tempArr[j] === -1){
                    j--;
                }
                if(s[tempArr[j]] === '('){
                    tempArr[j] = -1;
                    tempArr.push(-1);
                }else{
                    tempArr.push(i);
                }
            }else{
                tempArr.push(i);
            }
        }
        i++;
    }
    i = 0;
    var maxLength = 0;
    tempLength  = 0;

    while(i < tempArr.length){
        if(tempArr[i] === -1){
            tempLength++;
        }else{
            maxLength = maxLength > tempLength ? maxLength : tempLength;
            tempLength = 0;
        }
        i++;
    }

    maxLength = maxLength > tempLength ? maxLength : tempLength;

    return maxLength;
}

a = "(()(((()"; //2
b = longestValidParentheses(a);
// console.log(b);

a = '(((())';//4
b = longestValidParentheses(a);
// console.log(b);

a = '()()()(((())))';//14
b = longestValidParentheses(a);
// console.log(b);

a = '(((((())))))';//12
b = longestValidParentheses(a);
// console.log(b);

a = '))))';//0
b = longestValidParentheses(a);
// console.log(b);

a = ')())';//2
b = longestValidParentheses(a);
// console.log(b);

a = '(()';//2
b = longestValidParentheses(a);
// console.log(b);


a = '()()((';//4
b = longestValidParentheses(a);
// console.log(b);


a = "()(((((((())";//4
b = longestValidParentheses(a);
// console.log(b);

a = "()())))()()())))()()";//6
b = longestValidParentheses(a);
// console.log(b);

a = '(()((()))())';//12
b = longestValidParentheses(a);
// console.log(b);


