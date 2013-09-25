var getMiddleElement = function (min, max) {
	return min + Math.floor((max - min) / 2);
};

var chopImpl = function (item, array, min, max) {
    var id = getMiddleElement(min, max),
        testItem = array[id];
        
    if (min >= max) {
        return -1;
    }
        
    if (item < testItem) {
        return chopImpl(item, array, min, max - 1);
    }
    else if (item > testItem) {
        return chopImpl(item, array, min + 1, max);
    }
    else {
        return id;
    }
}

var chop = function(item, array) {
    if (!array) {
        return -1;
    }
    
    return chopImpl(item, array, 0, array.length);
}

exports.chop = chop;