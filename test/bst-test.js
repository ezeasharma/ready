var Bst = require('./../bst');
var expect = require('chai').expect;

describe('Bst', function(){
	it('Print', function(){
		console.log('Inside test');
		var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		bst.print();
	});
});