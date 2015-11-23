var expect = require('chai').expect;
var Stack = require('./../stack-using-array');

describe('Stack', function(){
	describe('ds', function(){
		it('push is what you pop', function(){
			var stack = new Stack();
			stack.push(6);
			expect(stack.count()).to.equal(1);
			expect(stack.pop()).to.equal(6);
			expect(stack.count()).to.equal(0);
			
			stack.push(4);stack.push(3);
			expect(stack.count()).to.equal(2);
			expect(stack.pop()).to.equal(3);
			expect(stack.pop()).to.equal(4);
			expect(stack.count()).to.equal(0);
		});
	});
});