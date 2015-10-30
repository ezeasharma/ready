var expect = require('chai').expect;
var Queue = require('./../queue-using-array');

describe('Queue', function(){
	describe('enqueue', function(){
		it('Increases the size by 1', function(){
			var queue = new Queue();
			queue.enqueue(10);
			queue.enqueue(11);
			expect(queue.size()).to.equal(2);
		});
	});
	
	describe('deenqueue', function(){
		it('gets elements in FIFO order', function(){
			var queue = new Queue();
			queue.enqueue(10);
			queue.enqueue(11);
			expect(queue.dequeue()).to.equal(10);
			expect(queue.dequeue()).to.equal(11);
		});
	});
});