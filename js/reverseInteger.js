/**
No.7 Reverse Integer
思路：直接把对称的数据进行交换。
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    y = "" + x;
    if(x < 0){
        low = 1;
    }else{
        low = 0;
    }
    high = y.length - 1;
    y = y.split("");
    while(low < high){
        temp = y[low];
        y[low] = y[high];
        y[high] = temp;
        low++;
        high--;
    }
    y = y.join("");
    y = parseInt(y) ;
    if( y > Math.pow(2,31)-1 || y < -Math.pow(2,31)){
        return 0;
    }else{
        return y;
    }
};

i = 1563847412;
a = reverse(i);
console.log(a);
console.log(-Math.pow(2,31)-1);

