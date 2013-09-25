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
    
    var id = min + Math.floor((max - min) / 2),     // get middle element
        testItem = array[id];
    
    if (item === testItem) {
        return id
    }
    else {
        return item < testItem ? chop(item, array, min, max - 1) :
                                 chop(item, array, min + 1, max);
    }
}

exports.chop = chop;