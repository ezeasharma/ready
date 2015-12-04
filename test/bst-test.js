var Bst = require('./../bst');
var expect = require('chai').expect;

describe('Bst', function(){
	describe('Search', function(){
		it('Search', function(){
			var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(bst.search(10)).to.be.false;
			expect(bst.search(8)).to.be.true;
		});	
	});	
});