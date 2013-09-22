var getMiddleElement = function (min, max) {
	return min + Math.floor((max - min) / 2);
};

var chop = function(item, array) {
	var min = 0,
		max = array.length;
		
	while(max >= min) {
		var id = getMiddleElement(min, max),
			testItem = array[id];
		if (item == testItem) {
			return id;
		}
		else if (item < testItem) {
			max = id - 1;
		}
		else {
			min = id + 1;
		}
	}
	
	return -1;
}

exports.chop = chop;