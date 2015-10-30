var queue = function(){
	var items = [];
	var currentItem = 0;
	
	this.enqueue = function(item){
		items.push(item);
	}
	
	this.dequeue = function(item){
		if(currentItem == items.length)
			return -1;
		else
			return items[currentItem ++];
	}
	
	this.size = function(){
		return items.length - currentItem;
	}
}

module.exports = queue;