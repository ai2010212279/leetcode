/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return mySqrtSearch(x, 1, x);
};

var mySqrtSearch = function(x, low, high) {
    var mid = parseInt(low + (high - low) / 2);
    if (mid * mid == x || (mid * mid < x && (mid+1) * (mid+1) > x)  ){
        return mid;
    }else if (mid * mid > x && (mid + 1) * (mid + 1) > x){
        return mySqrtSearch(x, low, mid);
    }else {
        return mySqrtSearch(x, mid + 1, high);
    }
}

a = mySqrt(99);
console.log(a);
