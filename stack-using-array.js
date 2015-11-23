var Stack = function(){
	var items = [];
	var currentCount = 0;
	
	this.count = function(){
		return currentCount;
	}
	
	this.pop = function(){
		if(currentCount == 0)
			return null;
		currentCount--;
		var item = items[currentCount];
		items[currentCount] = null;
		return item;
	};
	
	this.push = function(item){
		items[currentCount] = item;
		currentCount++; 
	}
};


module.exports = Stack;