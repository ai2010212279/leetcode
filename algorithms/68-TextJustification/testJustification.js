/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    for (var i = 0; i < words.length; i++) {
        if (maxWidth < words[i].length) {
            return words;
        }
    }

    var wordsLength = 0;
    var wordNum = 0
    var nextStartWord = 0;
    var tmpMaxWidth = maxWidth;
    var result = [];
    for (var i = 0; i < words.length; i++) {
        wordsLength += words[i].length;
        tmpMaxWidth -= 1;
        wordNum += 1;
        if (i == words.length - 1){
            line = "";
            for (var m = nextStartWord; m < words.length; m++){
                if (m != words.length - 1){
                    line = line + words[m] + " ";
                }else{
                    line = line + words[m];
                }
            }
            space = getSpace(maxWidth - line.length);
            line = line + space;
            result.push(line);
            continue;
        }
        if ( wordsLength + words[i + 1].length > tmpMaxWidth) {
            spaceLength = maxWidth - wordsLength;
            line = "";
            if (wordNum == 1) {
                space = getSpace(spaceLength);
                line = words[nextStartWord] + space;
                result.push(line);
            } else {
                leftSpace = spaceLength % (wordNum - 1);
                eachSpaceLength = parseInt(spaceLength / (wordNum - 1))
                space = getSpace(eachSpaceLength);
                for (var m = nextStartWord; m < nextStartWord + wordNum && m < words.length; m++) {
                    if (m == nextStartWord + wordNum - 1) {
                        line = line + words[m];
                    } else {
                        if (leftSpace > 0) {
                            line = line + words[m] + space + " ";
                            leftSpace--;
                        } else {
                            line = line + words[m] + space;
                        }
                    }
                }
                result.push(line);
            }
            nextStartWord = nextStartWord + wordNum;
            wordNum = 0;
            wordsLength = 0;
            tmpMaxWidth = maxWidth;
        }
    }
    return result;
};

var getSpace = function(spaceLength) {
    var space1 = "";
    for (var m = 0; m < spaceLength; m++) {
        space1 += " ";
    }
    return space1;
}

// a = fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16);
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i].length);
// }
// console.log(a);


// a = fullJustify(["i", "an", "good", "mans"], 8);
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i].length);
// }
// console.log(a);


a = fullJustify(["What","must","be","shall","be."],12)
for (var i = 0; i < a.length; i++) {
    console.log(a[i].length);
}
console.log(a);
