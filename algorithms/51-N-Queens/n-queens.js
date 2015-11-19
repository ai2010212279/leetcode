/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    result = [];
    var line = "";
    var nQueensSolve = [];
    for (var i = 0; i < n; i++){
        line += ".";
    }
    for (var i = 0; i < n; i++){
        nQueensSolve.push(line);
    }

    getQueens(0,nQueensSolve,n);
    return result;
};

var getQueens = function(currentLine, nQueensSolve, maxIndex) {
    if (currentLine == maxIndex) {
        result.push(nQueensSolve);
        return;
    }

    for (var index = 0; index < maxIndex; index++){
       var nextQueensSolve = nQueensSolve.slice();
       if (isValid(nextQueensSolve,currentLine,index)){
            var strLine = nextQueensSolve[currentLine].replaceAt(index,"Q");
            nextQueensSolve[currentLine] = strLine;
            getQueens(currentLine + 1, nextQueensSolve, maxIndex);
       }
    }
};

/**
 * @param  {array} nQueensSolve [description]
 * @param  {number} currentLine       [description]
 * @param  {number} currentIndex                 [description]
 * @return {array}                   [description]
 */
var isValid = function(nQueensSolve, currentLine, currentIndex) {

    for (var i = 0; i < currentLine; i++) {
        //45 angle
        var indexOf45 = currentIndex + (currentLine - i);
        if (nQueensSolve[i][indexOf45] == 'Q') {
            return false;
        }

        //135 angle
        var indexOf135 = currentIndex - (currentLine - i);
        if (nQueensSolve[i][indexOf135] == "Q") {
            return false;
        }

        //90 angle
        var indexOf90 = currentIndex
        if (nQueensSolve[i][indexOf90] == "Q") {
            return false;
        }

    }
    return true;
};

String.prototype.replaceAt = function(index, str) {
    return this.substr(0, index) + str + this.substr(index + 1);
};

solveNQueens(9);


