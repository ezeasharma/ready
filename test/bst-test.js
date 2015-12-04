var Bst = require('./../bst');
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('Bst', function(){
	
	describe('Count', function(){
		it('Computes the number of elements in a bst', function(){
			var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(bst.count()).to.equal(9);
		});	
	});
	
	describe('Search', function(){
		it('returns true if the data is present', function(){
			var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(bst.count()).to.equal(9);
			expect(bst.search(10)).to.be.false;
			expect(bst.search(8)).to.be.true;
		});
	});
	
	describe('Insert', function(){
		it('adds the element to the bst', function(){
			var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(bst.count()).to.equal(9);
			bst.insert(10);
			expect(bst.count()).to.equal(10);
		});
		
		it('throws exception if element is already present', function(){
			var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(bst.count()).to.equal(9);
			try{
				bst.insert(9);
				assert.fail('should not reach here');
			}
			catch(e){
				
			}
		});
	});
});