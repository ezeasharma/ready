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
			bst.insert(0);
			expect(bst.search(0)).to.be.true;
		});
	});
	
	describe('Insert', function(){
		it('creates root element if null', function(){
			var bst = new Bst(null);
			expect(bst.count()).to.equal(0);
			bst.insert(1);
			expect(bst.count()).to.equal(1);
		});
		it('adds the element to the bst', function(){
			var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(bst.count()).to.equal(9);
			bst.insert(10);
			expect(bst.count()).to.equal(10);
			bst.insert(0);
			expect(bst.count()).to.equal(11);
		});
		
		it('throws exception if element is already present', function(){
			var bst = new Bst([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(bst.count()).to.equal(9);
			try{
				bst.insert(9);
				assert.fail('should not reach here');
			}
			catch(e){
				expect(e).to.contain('Data already present');
			}
		});
	});
	
	describe('delete', function(){
		it('deletes when no right child.', function(){
			var bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(25);
			expect(bst.count()).to.equal(6);
			bst.delete(50);
			expect(bst.count()).to.equal(5);
			bst.delete(150);
			expect(bst.count()).to.equal(4);
		});
		
		it('deletes when right child has no left child', function(){
			var bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(25);bst.insert(125);bst.insert(175);bst.insert(140);
			expect(bst.count()).to.equal(9);
			bst.delete(150);
			expect(bst.count()).to.equal(8);
			bst.delete(20);
			expect(bst.count()).to.equal(7);
		});
		
		it('deletes when right child has left child', function(){
			var bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(75);bst.insert(66);bst.insert(80);bst.insert(68);bst.insert(64);
			expect(bst.count()).to.equal(10);
			bst.delete(50);
			expect(bst.count()).to.equal(9);
			bst.insert(67);
			expect(bst.count()).to.equal(10);
			bst.delete(75);
			expect(bst.count()).to.equal(9);
		});
		
		it('deletes the root node', function(){
			var bst = new Bst(null);
			bst.insert(90);		//only root
			expect(bst.count()).to.equal(1);
			bst.delete(90);
			expect(bst.count()).to.equal(0);
			
			bst = new Bst(null);
			bst.insert(90);bst.insert(80);		//only root
			expect(bst.count()).to.equal(2);
			bst.delete(90);
			expect(bst.count()).to.equal(1);
			
			bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(75);bst.insert(60);bst.insert(80);bst.insert(68);
			bst.delete(90);
			expect(bst.count()).to.equal(8);
			
			bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(25);
			bst.delete(90);
			expect(bst.count()).to.equal(5);
			
			bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(25);bst.insert(125);bst.insert(175);bst.insert(140);
			bst.delete(90);
			expect(bst.count()).to.equal(8);
		});
	});
});