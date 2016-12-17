/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word2.length == 0 && word1.length == 0) return 0;
    var shortWord, longWord;
    if (word1.length > word2.length){
        shortWord = word2;
        longWord = word1;
    }else{
        shortWord = word1;
        longWord = word2;
    }
    var distance = 0;
    if (word1.length == word2.length) {
        var numberCount = [];
        var numberCount2 = [];
        for (var i = 0; i < word2.length; i++){
            numberCount.push(0);
            numberCount2.push(0);
        }
        for (var i = 0; i < word1.length; i++) {
            for (var j = 0; j < numberCount.length; j++){
                if (i + j < numberCount.length && word1[i] == word2[i + j]){
                    numberCount[j]++;
                }
                if (i + j < numberCount2.length && word2[i] == word1[i + j]){
                    numberCount2[j]++;
                }
            }
        }
        console.log(numberCount, numberCount2);
        var maxIndex = 0, maxIndex2 = 0;
        var max = -1, max2 = -1;

        for (var i = 0; i < numberCount.length; i++) {
            if (numberCount[i] > max){
                maxIndex = i;
                max = numberCount[i];
            }
            if (numberCount2[i] > max2){
                maxIndex2 = i;
                max2 = numberCount2[i];
            }
        }
        // console.log(maxIndex, maxIndex2);
        var distance1 = 0, distance2 = 0;
        if (maxIndex == 0){
            distance1 = numberCount.length - numberCount[maxIndex];
        }else{
            distance1 = (numberCount.length - numberCount[maxIndex]) * 2;
        }
        if (maxIndex2 == 0){
            distance2 = numberCount2.length - numberCount2[maxIndex2];
        }else{
            distance2 = (numberCount2.length - numberCount2[maxIndex2]) * 2;
        }
        // console.log(distance1, distance2);
        // console.log(numberCount.length, numberCount2.length);
        distance =  distance1 > distance2 ? distance2 : distance1;
        return numberCount.length > distance ? distance : numberCount.length;
    }else {
        var lengthDistance = longWord.length - shortWord.length;
        var numberCount = [];
        for (var i = 0; i < lengthDistance; i++){
            numberCount.push(0);
        }

        for (var i = 0; i < shortWord.length; i++) {
            for (var j = 0; j < numberCount.length; j++) {
                if (shortWord[i] == longWord[i + j]){
                    numberCount[j]++;
                }
            }
        }

        var max = -1;
        for (var i = 0; i < numberCount.length; i++){
            if (numberCount[i] > max){
                max = numberCount[i];
            }
        }
        var tempDistance = shortWord.length - max;
        return tempDistance + numberCount.length;
    }
};
console.log(minDistance("park","spake"));
