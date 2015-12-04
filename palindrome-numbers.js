var PalindromeNumber = function(){
	this.checkNumberIsPalindrome = function(num){
		//console.log('input is ' + num);
		var divisor = 1;
		var remainder = num/divisor;
		
		while(remainder > 0){
			divisor *= 10;
			remainder = parseInt(num/divisor);
		}
		divisor = divisor / 10;
		while(num > 0)
		{			
			var left = parseInt(num / divisor);
			var right = num;	
			if(num > 10){
				right = num % 10;
				if(left != right)
					return false;
			}
			num = num % divisor;
			num = parseInt(num / 10);
			divisor = divisor / 100;
		}
		return true;
	}
	
	this.createSwappedInteger = function(num){
		//console.log('input is ' + num);
		var divisor = 1;
		var remainder = num/divisor;
		
		while(remainder > 0){
			divisor *= 10;
			remainder = parseInt(num/divisor);
		}
		divisor = divisor / 10;
		var digitsInOrder = [];
		while(num > 0)
		{			
			var left = parseInt(num / divisor);
			digitsInOrder.push(left);
			var right = num;	
			if(num > 10){
				right = num % 10;
				digitsInOrder.push(right);
			}
			num = num % divisor;
			num = parseInt(num / 10);
			divisor = divisor / 100;
		}
		var multiplier = 1;
		for(var  i = 0; i < digitsInOrder.length - 1; i++)
		{
			multiplier *= 10;
		}
		var result = 0;
		for(var  i = 0; i < digitsInOrder.length; i++)
		{
			//console.log(digitsInOrder[i] + ' * ' + multiplier);
			result += digitsInOrder[i] * multiplier;
			multiplier = multiplier / 10;
		}
		//console.log('result is ' + result);
		return result;
	}
}

module.exports = PalindromeNumber;