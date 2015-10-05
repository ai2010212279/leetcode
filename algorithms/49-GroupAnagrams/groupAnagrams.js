/**
 * @param {string[]} strs
 * @return {string[][]}
 * 不考虑出现数字的情况
 */

var groupAnagrams = function(strs){
    map = [];
    for (var i = 0; i < strs.length; i++){
        temp = strs[i].split("");
        temp.sort(function(a,b){
            return a > b ? 1 : -1;
        });
        temp = temp.join("");
        if(!map[temp]){
            map[temp] = [];
        }
        map[temp].push(strs[i]);
    }
    var result = [];
    for(var i in map){
        temp = map[i];
        temp.sort(function(a,b){
            return a > b ? 1 : -1;
        });
        result.push(temp);
    }
    return result;
}

a = groupAnagrams(['str','rst','srt','abc','qwe','weq','qew','01234']);
console.log(a);
