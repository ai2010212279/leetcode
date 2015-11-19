/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    result =  0;
    var line = "";
    var nQueensSolve = [];

    getQueens(0,nQueensSolve,n);
    return result;
};

var getQueens = function(currentLine, nQueensSolve, lineTotal) {
    if (currentLine == lineTotal) {
        result++;
        // console.log(nQueensSolve);
        return;
    }
    var startIndex = currentLine * lineTotal;
    var endIndex = (currentLine + 1) * lineTotal;
    // console.log(startIndex,index,endIndex);
    for (var index = startIndex; index < endIndex; index++){
       var nextQueensSolve = nQueensSolve.slice();
       if (isValid(nextQueensSolve,currentLine,index,lineTotal)){
            nextQueensSolve[index] = "Q";
            // console.log(nextQueensSolve);
            getQueens(currentLine + 1, nextQueensSolve, lineTotal);
       }
    }
};

/**
 * @param  {array} nQueensSolve [description]
 * @param  {number} currentLine       [description]
 * @param  {number} currentIndex                 [description]
 * @return {array}                   [description]
 */
var isValid = function(nQueensSolve, currentLine, LineIndex,lineTotal) {
    var LineIndex = LineIndex % lineTotal;
    for (var row = currentLine - 1; row >= 0; row--) {
        var diffLine = currentLine - row;

        //45 angle
        var indexOf45 = row * lineTotal + diffLine + LineIndex;
        //135 angle
        var indexOf135 = row * lineTotal + LineIndex - diffLine;
        //90 angle
        var indexOf90 = row * lineTotal + LineIndex;

        var tempLine45 = parseInt(indexOf45 / lineTotal);
        var tempLine135 = parseInt(indexOf135 / lineTotal);

        if (nQueensSolve[indexOf45] == 'Q' && tempLine45 == row) {
            return false;
        }


        if (nQueensSolve[indexOf135] == "Q" && tempLine135 == row) {
            return false;
        }


        if (nQueensSolve[indexOf90] == "Q") {
            return false;
        }

    }
    return true;
};

var start = (new Date()).getTime();
// totalNQueens(1);
totalNQueens(10);
// totalNQueens(8);

var end = (new Date()).getTime();
console.log(end - start);
// a = [];
// a[1] = 1;
// a[3] = 3;
