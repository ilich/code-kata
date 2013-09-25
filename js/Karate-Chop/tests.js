var VERSION_TO_TEST = 5,
	chop = require('./version' + VERSION_TO_TEST).chop;
	
exports.testChop = function (test) {
	test.equal(chop(3, []), -1);
	test.equal(chop(3, []), -1);
	test.equal(chop(1, [1]), 0);
	
    test.equal(chop(1, [1, 3, 5]), 0)
    test.equal(chop(3, [1, 3, 5]), 1)
    test.equal(chop(5, [1, 3, 5]), 2)
    test.equal(chop(0, [1, 3, 5]), -1)
    test.equal(chop(2, [1, 3, 5]), -1)
    test.equal(chop(4, [1, 3, 5]), -1)
    test.equal(chop(6, [1, 3, 5]), -1)
    
    test.equal(chop(1, [1, 3, 5, 7]), 0)
    test.equal(chop(3, [1, 3, 5, 7]), 1)
    test.equal(chop(5, [1, 3, 5, 7]), 2)
    test.equal(chop(7, [1, 3, 5, 7]), 3)
    test.equal(chop(0, [1, 3, 5, 7]), -1)
    test.equal(chop(2, [1, 3, 5, 7]), -1)
    test.equal(chop(4, [1, 3, 5, 7]), -1)
    test.equal(chop(6, [1, 3, 5, 7]), -1)
    test.equal(chop(8, [1, 3, 5, 7]), -1)
	test.done();
}