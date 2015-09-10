
/**
    param numbers[]
    param target
    return  number
*/
function binarySearch (arr,target) {
    var targetIndex = -1;
    var low = 0;
    var high = arr.length - 1;
    while(low <= high){
        middle = parseInt(low + (high - low) / 2);
        if(arr[middle] > target){
            high = middle - 1;
        }else if(arr[middle] < target){
            low = middle + 1;
        }else{
            return middle;
        }
    }
    console.log(target,middle,targetIndex);
    return targetIndex;
}


a = [2,4,6,8,10,12,14,19];
b = binarySearch(a,1);
console.log(b);

b = binarySearch(a,2);
console.log(b);

b = binarySearch(a,3);
console.log(b);

b = binarySearch(a,4);
console.log(b);

b = binarySearch(a,5);
console.log(b);

b = binarySearch(a,6);
console.log(b);

b = binarySearch(a,7);
console.log(b);

b = binarySearch(a,8);
console.log(b);

b = binarySearch(a,9);
console.log(b);

b = binarySearch(a,10);
console.log(b);

b = binarySearch(a,11);
console.log(b);

b = binarySearch(a,12);
console.log(b);

b = binarySearch(a,13);
console.log(b);

b = binarySearch(a,14);
console.log(b);
b = binarySearch(a,15);
console.log(b);
b = binarySearch(a,16);
console.log(b);
b = binarySearch(a,17);
console.log(b);
b = binarySearch(a,18);
console.log(b);
b = binarySearch(a,19);
console.log(b);
