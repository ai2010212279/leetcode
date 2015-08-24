/**
    NO.9 Palindrome Number
    Determine whether an integer is a palindrome. Do this without extra space.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x > Math.pow(2,32) -1) return false;
    oldNumber = x;
    newNumber = 0;
    while(x > 0){
        i = x % 10;
        x = parseInt(x / 10);
        newNumber *= 10;
        newNumber += i;

    }
    // console.log(newNumber,oldNumber);
    return newNumber === oldNumber;
};

a = 121;

b = isPalindrome(a);
console.log(b);
