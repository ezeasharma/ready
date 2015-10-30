var MergeSort = require('./../merge-sort');
var expect = require('chai').expect;

describe('MergeSort', function(){
	describe('Sort', function(){
		it('should test against sorted cases.', function(){
			var mergeSort = new MergeSort();
			expect(mergeSort.sort([1, 2, 3, 4])).to.eql([1, 2, 3, 4]);
			expect(mergeSort.sort([1, 2])).to.eql([1, 2]);
			expect(mergeSort.sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		});
		
		it('should test against unsorted cases.', function(){
			var mergeSort = new MergeSort();
			expect(mergeSort.sort([1, 4, 3, 2])).to.eql([1, 2, 3, 4]);
			expect(mergeSort.sort([2, 1])).to.eql([1, 2]);
			expect(mergeSort.sort([1, 9, 8, 7, 6, 5, 4, 3, 2, 10])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		});
		
		it('should test against duplicate integer case.', function(){
			var mergeSort = new MergeSort();
			expect(mergeSort.sort([1, 4, 3, 2, 2, 3])).to.eql([1, 2, 2, 3, 3, 4]);
		});
	});
});