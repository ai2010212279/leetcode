/**
 * @param {number} n
 * @return {string[][]}
 *
 * 超时
 */
var solveNQueens = function(n) {
    allLocationList = [];
    var allowY = [];
    for (var i = 0; i < n; i++) {
        allowY.push(i);
    }
    getLocations([], allowY, n);

    var nQueens = []
    for (var i = 0 ; i < allLocationList.length; i++){
        var nextNqueenLocation = allLocationList[i].shift();
        var line = "";
        var martix = [];
        for (j = 0; j < n; j++){
            for(k = 0; k < n; k++){
                if(nextNqueenLocation && nextNqueenLocation.x == j && nextNqueenLocation.y == k){
                    line += "Q";
                    nextNqueenLocation = allLocationList[i].shift();
                }else{
                    line += ".";
                }
            }
            martix.push(line);
            line = "";
        }
        nQueens.push(martix);
    }

    return nQueens;
};

var getLocations = function(locationList, allowY, n) {
    if (locationList.length == n) {
        allLocationList.push(locationList);
        return;
    }
    var x = locationList.length;
    for (var j = 0; j < allowY.length; j++) {
        var nextAllowY = allowY.slice();
        var nextLocationList = locationList.slice();
        nextAllowY.splice(j, 1);
        var queen = new queenLocate(x, allowY[j]);
        nextLocationList.push(queen);
        getLocations(nextLocationList, nextAllowY, n);
    }
}

var queenLocate = function(x, y) {
    this.x = x;
    this.y = y;
}

solveNQueens(8);
