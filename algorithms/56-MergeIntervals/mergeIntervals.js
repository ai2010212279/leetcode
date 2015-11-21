/**
 * @param {interval[]} intervals
 * @return {interval[]}
 */

var merge = function(intervals) {
    intervals.sort(function(a,b){
        return a.start > b.start ? 1 : -1;
    });
    // console.log(intervals);
    var flag = 1;
    for (var i = 0;i < intervals.length;i++){
        flag = 1;
        for (var j = i + 1; j < intervals.length && flag == 1;){
            if(intervals[i].end >= intervals[j].start){
                if (intervals[i].end < intervals[j].end){
                    intervals[i].end = intervals[j].end;
                }
                intervals.splice(j,1);
            }else{
                flag = 0;
            }
        }
    }
    console.log(intervals);
    return intervals;
};

var Interval = function(start, end) {
    this.start = start;
    this.end = end;
};

var init = function(arr){
    p = [];
    for (var i = 0;i < arr.length;i++){
        var a = new Interval(arr[i][0],arr[i][1]);
        p.push(a);
    }
    return p;
}

// a = [[1,3],[2,6],[8,10],[15,18]];
// b = init(a);
// merge(b);

// a = [[1,4],[2,3],[4,5]];
// b = init(a);
// merge(b);


// a = [[1,4],[2,3],[5,6],[4,5]];
// b = init(a);
// merge(b);

// a = [[1,4],[1,5],[2,6]];
// b = init(a);
// merge(b);

a = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]];
b = init(a);
merge(b);
