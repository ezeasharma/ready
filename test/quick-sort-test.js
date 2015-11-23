var expect = require('chai').expect;
var QuickSort = require('./../quick-sort');

describe('Quick Sort', function(){
	describe('sort', function(){
		it('can sort already sorted array', function(){
			var quickSort = new QuickSort();
			expect(quickSort.sort([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
		});
		
		it('can sort simple unsorted array', function(){
			var quickSort = new QuickSort();
			expect(quickSort.sort([1, 3, 2, 4])).to.eql([1, 2, 3, 4]);
		});
		
		it('can sort simple unsorted array', function(){
			var quickSort = new QuickSort();
			expect(quickSort.sort([4, 3, 2, 1])).to.eql([1, 2, 3, 4]);
		});
		
		
		it('can sort simple unsorted array with duplicates', function(){
			var quickSort = new QuickSort();
			expect(quickSort.sort([4, 3, 2, 3, 2, 1])).to.eql([1, 2, 2, 3, 3, 4]);
		});
		
		it('can sort simple low/high case', function(){
			var quickSort = new QuickSort();
			expect(quickSort.sort([4, 3, 1, 3, 2, 1])).to.eql([1, 1, 2, 3, 3, 4]);
		});
		
	});
});