/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    pathArr = [];
    tempPath = "";
    for (var i = 0; i < path.length; i++){
        if (path[i] == "/" || i == path.length - 1){
            if (path[i] != "/"){
                tempPath += path[i];
            }
            if (tempPath == "" || tempPath == "."){
            }else if (tempPath == ".."){
                pathArr.pop();
            }else{
                pathArr.push(tempPath);
            }
            tempPath = "";
        }else{
            tempPath += path[i];
        }
    }

    result = "";
    for (var i = 0; i < pathArr.length; i++){
        result = result + "/" + pathArr[i];
    }
    return result.length == 0 ? "/" : result;
};

// console.log(simplifyPath("/../"));
// console.log(simplifyPath("/a/./b/../../c/"));
// console.log(simplifyPath("/a/../cd/b/../b/../c/"));
// console.log(simplifyPath("/..."));
// console.log(simplifyPath("///eHx/.."));
console.log(simplifyPath("/abc/..."));
