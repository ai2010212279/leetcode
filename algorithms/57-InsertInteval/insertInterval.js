/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length == 0) return [newInterval];
    var newInts = [];
    var start = null,
        end = null;
    //get start
    if (newInterval.start <= intervals[0].start) {
        start = newInterval.start;
    } else {
        for (var i = 0; i < intervals.length; i++) {
            if (newInterval.start >= intervals[i].start && newInterval.start <= intervals[i].end) {
                start = intervals[i].start;
                break;
            } else if (intervals[i - 1] && newInterval.start > intervals[i - 1].end && newInterval.start < intervals[i].start) {
                start = newInterval.start;
                break;
            } else {
                newInts.push(intervals[i]);
            }
        }
    }
    if (start == null) {
        start = newInterval.start;
    }

    if (newInterval.end >= intervals[intervals.length - 1].end) {
        end = newInterval.end
        i = intervals.length - 1;
    } else {
        for (var i = intervals.length - 1; i > -1; i--) {
            if (newInterval.end <= intervals[i].end && newInterval.end >= intervals[i].start) {
                end = intervals[i].end;
                break;
            } else if (newInterval.end < intervals[i].start && intervals[i - 1] && newInterval.end > intervals[i - 1].end) {
                end = newInterval.end;
                i--;
                break;
            }
        }
    }
    if (end === null) {
        end = newInterval.end;
    }

    var insertInterval = new Interval(start, end);
    newInts.push(insertInterval);

    for (var i = i + 1; i < intervals.length; i++) {
        newInts.push(intervals[i]);
    }
    // console.log(newInts);
    return newInts;
};


var Interval = function(start, end) {
    this.start = start;
    this.end = end;
};

var init = function(arr) {
    p = [];
    for (var i = 0; i < arr.length; i++) {
        var a = new Interval(arr[i][0], arr[i][1]);
        p.push(a);
    }
    return p;
}

a = [
    [3, 4],[5,6]
];
b = init(a);
c = new Interval(1, 2);
insert(b, c);

a = [
    [1, 2],[3,4]
];
b = init(a);
c = new Interval(0, 4);
insert(b, c);

a = [
    [1, 2],
];
b = init(a);
c = new Interval(3, 4);
insert(b, c);


a = [
    [1, 2],
    [3, 8],
    [3, 13],
    [8, 10],
    [12, 16]
];
b = init(a);
c = new Interval(3, 13);
insert(b, c);

a = [
    [0, 4],
    [7, 12]
];
b = init(a);
c = new Interval(0, 5);
insert(b, c);


a = [
    [0, 4],
    [7, 12]
];
b = init(a);
c = new Interval(5, 6);
insert(b, c);
