var expect = require('chai').expect;
var PalindromeNumber = require('./../palindrome-numbers');

describe('palindrome-number', function(){
	describe('checkNumberIsPalindrome', function(){
		it('returns false for negative cases', function(){
			
			var palindrome = new PalindromeNumber();
			expect(palindrome.checkNumberIsPalindrome(12)).to.be.false;
			expect(palindrome.checkNumberIsPalindrome(291)).to.be.false;
			expect(palindrome.checkNumberIsPalindrome(2991)).to.be.false;
		});
		it('returns true for positive cases', function(){
			
			var palindrome = new PalindromeNumber();
			expect(palindrome.checkNumberIsPalindrome(1)).to.be.true;
			expect(palindrome.checkNumberIsPalindrome(292)).to.be.true;
			expect(palindrome.checkNumberIsPalindrome(11111111111)).to.be.true;
		});
	});
	
	
	describe('createSwappedInteger', function(){
		it('validates test cases', function(){
			var palindrome = new PalindromeNumber();
			expect(palindrome.createSwappedInteger(12)).to.equal(12);
			expect(palindrome.createSwappedInteger(291)).to.equal(219);
			expect(palindrome.createSwappedInteger(2991)).to.equal(2199);
		});
	});
});
