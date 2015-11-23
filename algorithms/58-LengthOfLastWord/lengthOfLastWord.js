/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    var length = 0;
    for (var i = s.length - 1; i > -1 && s[i] != " "; i--){
        length++;
    }
    // console.log(length);
    return length;
};

a = "  3  3rrr";
lengthOfLastWord(a);

