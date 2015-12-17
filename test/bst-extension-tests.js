var Bst = require('./../bst');
var BstExtension = require('./../bst-extensions');
var expect = require('chai').expect;
var assert = require('chai').assert;


describe('BstExtensions', function(){
	describe('LCA', function(){
		it('returns LCA if present', function(){
			var bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(75);bst.insert(66);bst.insert(80);bst.insert(68);bst.insert(64);
			expect(bst.count()).to.equal(10);
			var bstExtension = new BstExtension(bst);
			expect(bstExtension.LCA(66, 80)).to.equal(75);
		});	
		
		it('returns -1 element not present', function(){
			var bst = new Bst(null);
			bst.insert(90);bst.insert(50);bst.insert(150);bst.insert(20);bst.insert(5);bst.insert(75);bst.insert(66);bst.insert(80);bst.insert(68);bst.insert(64);
			expect(bst.count()).to.equal(10);
			var bstExtension = new BstExtension(bst);
			expect(bstExtension.LCA(66, 99)).to.equal(-1);
		});	
	});
});