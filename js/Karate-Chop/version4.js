var chop = function (item, array, min, max) {
    if (!array) {
        return -1;
    }
    
    if (typeof min === 'undefined' && typeof max === 'undefined') {
        return chop(item, array, 0, array.length);
    }
    
    if (min >= max) {
        return -1;
    }
    
    var getMiddleElement = function() {
        return min + Math.floor((max - min) / 2);
    };
    
    var id = getMiddleElement(),
        testItem = array[id];
       
    if (item < testItem) {
        return chop(item, array, min, max - 1);
    }
    else if (item > testItem) {
        return chop(item, array, min + 1, max);
    }
    else {
        return id;
    }
}

exports.chop = chop;